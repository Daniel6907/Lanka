import { teamsDb } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const newTeam = {
    id: Date.now(), 
    name: body.name,
    description: body.description,
    lead: body.lead,
    status: 'New',
    stack: body.stack || 'Не вказано',
    details: body.details || 'Немає деталей'
  };

  teamsDb.push(newTeam);
  return newTeam;
})