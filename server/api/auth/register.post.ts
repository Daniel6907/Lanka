import { getDb, saveDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.email || !body.password || !body.faculty) {
    throw createError({ statusCode: 400, message: 'Всі поля обовязкові' })
  }

  const db = getDb()
  const exists = db.users.find((u) => u.email === body.email)
  if (exists) throw createError({ statusCode: 409, message: 'Користувач з таким email вже існує' })

  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
    password: body.password,
    faculty: body.faculty,
    skills: body.skills || []
  }

  db.users.push(newUser)
  saveDb(db)

  const { password, ...safeUser } = newUser
  return safeUser
})