create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

alter default privileges revoke all on sequences from public;
alter default privileges revoke all on functions from public;

create schema app_public;
create schema app_private;

create function app_private.set_updated_at() returns trigger as $$
begin
  new.updated_at := current_timestamp;
  return new;
end;
$$ language plpgsql;

-- * public tables

create table app_public.human (
  id                uuid primary key default uuid_generate_v4(),
  username          text check (char_length(username) < 50),
  created_at        timestamp default now()
);

alter table app_public.human add column updated_at timestamp default now();
alter table app_public.human enable row level security;
create trigger human_updated_at before update
  on app_public.human
  for each row
  execute procedure app_private.set_updated_at();

create table app_public.note (
  id          uuid primary key default uuid_generate_v4(),
  human_id    uuid not null references app_public.human(id),
  content     text not null,
  created_at  timestamp default now()
);

alter table app_public.note add column updated_at timestamp default now();
alter table app_public.note enable row level security;

create trigger note_updated_at before update
  on app_public.note
  for each row
  execute procedure app_private.set_updated_at();

-- * private table

create table app_private.user (
  human_id          uuid not null references app_public.human(id),
  email             text not null unique check (email ~* '^.+@.+\..+$'),
  password_hash     text not null
);

create role postgraphile_human login password 'xyz';

create role anonymous_human;
grant anonymous_human to postgraphile_human;

create role the_human;
grant the_human to postgraphile_human;

create type app_private.jwt_token as (
  role        text,
  human_id    integer,
  exp         bigint
);



create function app_public.authenticate(
  email    text,
  password text
) returns app_private.jwt_token as $$
declare
  account app_private.user;
begin
  select a.* into account
  from app_private.user as a
  where a.email = $1;

  if account.password_hash = crypt(password, account.password_hash) then
    return ('the_human', account.human_id, extract(epoch from (now() + interval '7 days')))::app_private.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;

create function app_public.current_human() returns app_public.human as $$
  select *
  from app_public.human
  where id = current_setting('jwt.claims.human_id', true)::uuid
$$ language sql stable;



grant usage on schema app_public to anonymous_human, the_human;

grant select on table app_public.human to anonymous_human, the_human;
grant update, delete on table app_public.human to the_human;

grant select, insert, update, delete on table app_public.note to the_human;

grant execute on function app_public.authenticate(text, text) to anonymous_human, the_human;
grant execute on function app_public.current_human() to anonymous_human, the_human;



create policy select_human on app_public.human for select
  using (true);

create policy update_human on app_public.human for update to the_human
  using (id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);

create policy delete_human on app_public.human for delete to the_human
  using (id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);

create policy select_note on app_public.note for select
  using (human_id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);

create policy insert_note on app_public.note for insert to the_human
  with check (human_id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);

create policy update_note on app_public.note for update to the_human
  using (human_id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);

create policy delete_note on app_public.note for delete to the_human
  using (human_id = nullif(current_setting('jwt.claims.human_id', true), '')::uuid);
