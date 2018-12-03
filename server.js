const app = require('./src/app')
const db = require('./src/db/dbConnection')
const port = 3031
const url = 'mongodb://localhost/koa-apiDB'

db.connect(url)
const server = app.listen(port, () => {console.log(`Server's listening on port ${port}`)})

module.exports = server