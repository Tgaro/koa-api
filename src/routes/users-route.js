const koaRouter = require('koa-router')
const usersCtrl = require('../controllers/users')
const router = koaRouter()

router.get("/users", async function (ctx) {

	ctx.session.status == null
	? ctx.redirect('/login')
	: await usersCtrl.readUser(ctx, router)
})

router.get("/users/:userid", async function (ctx) {
	
	ctx.session.status == null
	? ctx.redirect('/login')
	: await usersCtrl.readUserById(ctx, router)
})

router.post("/users/createUser", async function (ctx) {
	
	ctx.session.status == null
	? ctx.redirect('/login')
	: await usersCtrl.createUser(ctx, router)
})

router.put("/users/updateUser/:id", async function (ctx) {
	
	ctx.session.status == null
	? ctx.redirect('/login')
	: await usersCtrl.updateUser(ctx, router)
})

router.delete("/users/deleteUser/:id", async function (ctx) {
	
	ctx.session.status == null
	? ctx.redirect('/login')
	: await usersCtrl.deleteUser(ctx, router)
})

module.exports = router