const koaRouter = require('koa-router')
const validate = require('../auth/auth')
const router = koaRouter()

router.post('/login', ctx => validate(ctx))

router.get('/login', ctx => ctx.session.status == null
	? (ctx.message = 'Waiting for login',
		ctx.status = 401)
	: ctx.redirect('/users'))

module.exports = router
