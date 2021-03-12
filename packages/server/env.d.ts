declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    SECRET_KEY: string
    PORT: string
  }
}
