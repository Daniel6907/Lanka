import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const DB_PATH = resolve('./data/db.json')

const defaultData = {
  users: [
    { id: 1, name: 'Daniel', email: 'daniel@ukd.edu.ua', password: '12345678', faculty: 'ФІТ', skills: ['Vue', 'Nuxt', 'Node.js'] }
  ],
  teams: [
    { id: 1, name: 'Lanka Dev Team', description: 'Розробка основного функціоналу платформи Lanka', lead: 'Daniel', status: 'Active', stack: 'Vue 3, Nuxt, Node.js', details: 'Шукаємо Frontend розробника.', members: [1], maxMembers: 4, course: 'Конструювання ПЗ' },
    { id: 2, name: 'UI Masters', description: 'Дизайн та верстка університетських проєктів', lead: 'Ivan', status: 'Pending', stack: 'Figma, TailwindCSS', details: 'Шукаємо UI/UX дизайнера.', members: [], maxMembers: 3, course: 'Веб-дизайн' },
    { id: 3, name: 'Data Science Squad', description: 'Аналіз даних та ML моделі', lead: 'Olena', status: 'Active', stack: 'Python, TensorFlow, Pandas', details: 'Шукаємо студентів з базовими знаннями Python.', members: [], maxMembers: 5, course: 'Машинне навчання' }
  ],
  applications: []
}

function readDb() {
  if (!existsSync(DB_PATH)) {
    writeDb(defaultData)
    return defaultData
  }
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'))
}

function writeDb(data) {
  const dir = resolve('./data')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

export function getDb() { return readDb() }
export function saveDb(data) { writeDb(data) }