const userModel = require('../models/user').model

const createUser = async (ctx, router) => {

	const newUser = new userModel(ctx.request.body)
	console.log(await checkUser(newUser, userModel))
	if (await checkUser(newUser, userModel)){
		
		try{
			ctx.body = await newUser.save()
		}catch(err){
			ctx.body = err
		}
	}
	else
		ctx.body = `You can't create another user with same id`
}

const checkUser = async (user, model) => {
	let check = []
	await model.find({id: user.id}, (err, result) => {
		err
		? console.log(err)
		: check = result
	})

	if(check.length > 0)
		return false
	else
		return true
}

const updateUser = async (ctx, router) => {

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

	await userModel.find({}, {'_id': 0}, (err, result) => {
		
		err
		? ctx.body = `Can't complete query due error: ${err}`
		: ctx.body = result
	})
}

const readUserById = async (ctx, router) => {

	await userModel.find({userid: ctx.request.params.userid}, (err, result) => {
		
		err
		? ctx.body = `Can't complete query due error: ${err}`
		: ctx.body = result
	})
}

const deleteUser = async (ctx, router) => {

	await userModel.deleteMany({id: ctx.params.id}, (err, result) => {
		
		err
		? ctx.body = `Can't delete due error: ${err}`
		: ctx.body = `User deleted ${result}`
	})
}

module.exports = {createUser, updateUser, readUser, readUserById, deleteUser}