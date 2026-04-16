import { teamsDb } from '../utils/db'

export default defineEventHandler((event) => {
  return teamsDb;
})