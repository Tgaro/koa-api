const koaRouter = require('koa-router')
const usersCtrl = require('../controllers/users')
const router = koaRouter()

router.get('/users', async function (ctx) {

	ctx.session.status == null
	? (ctx.redirect('/login'), ctx.status = 401)
	: await usersCtrl.readUser(ctx)
})

router.get('/users/:userid', async function (ctx) {
	
	ctx.session.status == null
	? (ctx.redirect('/login'), ctx.status = 401)
	: await usersCtrl.readUserById(ctx)
})

router.post('/users/createUser', async function (ctx) {
	
	ctx.session.status == null
	? (ctx.redirect('/login'), ctx.status = 401)
	: await usersCtrl.createUser(ctx)
})

router.put('/users/updateUser/:id', async function (ctx) {
	
	ctx.session.status == null
	? (ctx.redirect('/login'), ctx.status = 401)
	: await usersCtrl.updateUser(ctx)
})

router.delete('/users/deleteUser/:id', async function (ctx) {
	
	ctx.session.status == null
	? (ctx.redirect('/login'), ctx.status = 401)
	: await usersCtrl.deleteUser(ctx)
})

module.exports = router