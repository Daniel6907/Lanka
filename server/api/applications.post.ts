import { getDb, saveDb } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const db = getDb()
  const team = db.teams.find((t) => t.id === body.teamId)

  if (!team) throw createError({ statusCode: 404, message: 'Команду не знайдено' })
  if (team.members.length >= team.maxMembers) throw createError({ statusCode: 400, message: 'Команда вже укомплектована' })

  const newApp = {
    id: Date.now(),
    userId: body.userId,
    teamId: body.teamId,
    role: body.role || 'Не вказано',
    status: 'pending'
  }

  db.applications.push(newApp)
  saveDb(db)
  return newApp
})