const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: 'You must enter a valid id'
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

const model = mongoose.model('user', userSchema)


module.exports = {model}