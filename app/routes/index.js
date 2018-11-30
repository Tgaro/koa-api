module.exports = router => {
	router.get("/", async function (ctx) {

		await router.app.controllers.index.readUser(ctx, router)
	})

	router.get("/:userid", async function (ctx) {

		await router.app.controllers.index.readUserById(ctx, router)
	})

	router.post("/createUser", async function (ctx) {

		await router.app.controllers.index.createUser(ctx, router)
	})

	router.put("/updateUser/:userid", async function (ctx) {

		await router.app.controllers.index.updateUser(ctx, router)
	})

	router.delete("/deleteUser/:userid", async function (ctx) {

		await router.app.controllers.index.deleteUser(ctx, router)
	})
}