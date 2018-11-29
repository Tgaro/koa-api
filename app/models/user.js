const mongoose = require('mongoose')
const schema = mongoose.Schema

const createModel = () => {
	const userSchema = new schema({
		token: {
			type: String,
			required: 'You must enter a valid token'
		},
		user: {
			type: String,
			required: 'Enter your username'
			},    
	    pass: {
	        type: String,
	        required: 'Enter a valid password'
	    }
	})

	const userModel = mongoose.model('user', userSchema)
	return userModel
}

const model = createModel()

module.exports = {model}