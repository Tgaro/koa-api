const createUser = async (ctx, router) => {

	const userModel = router.app.models.user.model
	const newUser = new userModel(ctx.request.body)
	await newUser.save((err, result) => {
		
		err
		? console.log('Erro', err.errors)
		: ctx.body = result
	})

	return ctx
}

const updateUser = async (ctx, router) => {


	const userModel = router.app.models.user.model
	await userModel.findOneAndUpdate(

		ctx.request.body,
		ctx.request.body,
		{new: true},
		(err, result) => {

		err
		? ctx.body = `Can't complete query due error: ${err}`
		: ctx.body = result
	})
}

const readUser = async (ctx, router) => {

	const userModel = router.app.models.user.model
	await userModel.find({}, (err, result) => {
		
		err
		? ctx.body = `Can't complete query due error: ${err}`
		: ctx.body = result
	})
}

const deleteUser = async (ctx, router) => {

	const userModel = router.app.models.user.model
	await userModel.remove(ctx.request.body, (err, result) => {
		
		err
		? ctx.body = `Can't delete due error: ${err}`
		: ctx.body = `User deleted ${result}`
	})
}

module.exports = {createUser, updateUser, readUser, deleteUser}