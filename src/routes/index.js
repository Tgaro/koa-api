const combineRouters = require('koa-combine-routers')
const loginRoute = require('./login-route')
const userRoute = require('./users-route')

const router = combineRouters(
	loginRoute,
	userRoute
)

module.exports = router