const app = require('./app')
const knex = require('knex')
const { PORT, DB_URL } = require('./config')

const db = knex({
  client: 'pg',
  connection: DB_URL,
})
app.set('db', db)


app.listen(8000, () => {
  console.log(`Server listening at http://localhost:8000`)
})

module.exports = {app};