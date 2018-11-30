const app = require('./config/app')
const port = 3031
const server = app.listen(port, () => {console.log(`Server's listening on port ${port}`)})

module.exports = server