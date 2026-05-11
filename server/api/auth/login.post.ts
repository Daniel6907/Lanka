import { getDb } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const db = getDb()
  const user = db.users.find((u) => u.email === body.email && u.password === body.password)

  if (!user) throw createError({ statusCode: 401, message: 'Невірний email або пароль' })

  const { password, ...safeUser } = user
  return { user: safeUser, token: `token-${user.id}-${Date.now()}` }
})