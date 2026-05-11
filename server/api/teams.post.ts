import { getDb, saveDb } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.description || !body.lead) {
    throw createError({ statusCode: 400, message: 'Назва, опис та лідер обовязкові' })
  }

  const db = getDb()
  const newTeam = {
    id: Date.now(),
    name: body.name,
    description: body.description,
    lead: body.lead,
    status: 'Active',
    stack: body.stack || 'Не вказано',
    details: body.details || '',
    members: [],
    maxMembers: body.maxMembers || 4,
    course: body.course || 'Не вказано'
  }

  db.teams.push(newTeam)
  saveDb(db)
  return newTeam
})