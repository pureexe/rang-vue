import Dexie from 'dexie'

const db = new Dexie('rang')
db.version(1).stores({
  bot: '++id,name',
  conversation: '++id,bot',
  history: '++id,bot,date,user,question,reply'
})

export default db
