import db from './database.js'
let currentBotId
let bot = {
  add: (name) => {
    return db.bot.put({
      'name': name
    })
  },
  list: () => {
    return db.bot.toArray()
  },
  remove: (botId) => {
    db.bot.where('id').equals(botId).delete()
    db.conversation.where('bot').equals(botId).delete()
  },
  set: (id, callback) => {
    db.bot.get(parseInt(id)).then((r) => {
      if (r === undefined && callback) {
        callback(new Error('bot not found'))
      }
      if (r) {
        currentBotId = id
        if (callback) {
          callback(undefined)
        }
      }
    })
  },
  teach: (botId, question, reply) => {
    if (reply === undefined && currentBotId === undefined) {
      throw new Error('require botId')
    }
    if (reply === undefined) {
      reply = question
      question = botId
      botId = currentBotId
    }
    return db.conversation.put({
      'bot': botId,
      'question': question,
      'reply': reply
    })
  }
}
export default bot
