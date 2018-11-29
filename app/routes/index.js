module.exports = router => {
	router.get("/", async function (ctx) {
		await router.app.controllers.index.readUser(ctx, router)
	})

	router.post("/", async function (ctx) {
		await router.app.controllers.index.createUser(ctx, router)
	})

	router.put("/", async function (ctx) {
		await router.app.controllers.index.updateUser(ctx, router)
	})

	router.delete("/", async function (ctx) {
		await router.app.controllers.index.deleteUser(ctx, router)
	})
}