const createUser = async (ctx, router) => {

	const userModel = router.app.models.user.model
	const newUser = new userModel(ctx.request.body)
	try{
		ctx.body = await newUser.save()
	}catch(err){
		ctx.body = err
	}
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
	await userModel.find({}, {'_id': 0}, (err, result) => {
		
		err
		? ctx.body = `Can't complete query due error: ${err}`
		: ctx.body = result
	})
}

const readUserById = async (ctx, router) => {

	const userModel = router.app.models.user.model
	await userModel.find({userid: ctx.request.params.userid}, (err, result) => {
		
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