import { getDb } from '../utils/db'

export default defineEventHandler(() => {
  const db = getDb()
  return db.teams
})