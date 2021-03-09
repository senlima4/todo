revoke all on schema public from public;

alter default privileges revoke all on sequences from public;
alter default privileges revoke all on functions from public;

grant all on schema public to :DATABASE_OWNER;

create schema app_public;
create schema app_hidden;
create schema app_private;

grant usage on schema public, app_public, app_hidden to :DATABASE_VISITOR;

alter default privileges in schema public, app_public, app_hidden
  grant usage, select on sequences to :DATABASE_VISITOR;

alter default privileges in schema public, app_public, app_hidden
  grant execute on functions to :DATABASE_VISITOR;

create function app_private.tg__timestamps() returns trigger as $$
begin
  NEW.created_at = (case when TG_OP = 'INSERT' then NOW() else OLD.created_at end);
  NEW.updated_at = (case when TG_OP = 'UPDATE' and OLD.updated_at >= NOW() then OLD.updated_at + interval '1 millisecond' else NOW() end);
  return NEW;
end;
$$ language plpgsql volatile set search_path to pg_catalog, public, pg_temp;

create extension if not exists "uuid-ossp";

create table app_public.notes (
    id          uuid primary key default uuid_generate_v4(),
    content     text,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now()
);

alter table app_public.notes add column updated_at timestamp default now();

comment on table app_public.notes is 'A note wrote by a `User`.';
comment on column app_public.notes.id is 'The primary key for the `Note`.';
comment on column app_public.notes.content is 'The main body text of the `Note`.';
comment on column app_public.notes.created_at is 'The time this `Note` was created.';
comment on column app_public.notes.updated_at is 'The time this `Note` was last modified (or created).';

create trigger note_updated_at
  before insert or update on app_public.notes
  for each row
  execute procedure app_private.tg__timestamps();

