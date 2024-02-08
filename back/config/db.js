import pkg from 'pg'
import { config } from 'dotenv'
const { Pool } = pkg
config()

export const pool = new Pool({
  user: process.env.POSTGREE_USER,
  host: process.env.POSTGREE_HOST,
  password: process.env.POSTGREE_PASSWORD,
  database: process.env.PROJECT_DB
})
