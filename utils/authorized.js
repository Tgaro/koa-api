const validate = require('./validations')

exports.testUsers = myAgent => {

	return new Promise((resolve, reject) => {
		myAgent
 		.get('/users')
 		.expect(200)
 		.expect(validate.contentHeader)
 		.end( (err, res) => {
 			if (err)
 				reject(err)
 			else{
 				resolve('OK')
 			}
 		})
	})
}

exports.testUsersById = (myAgent, user) => {

 	myAgent
 		.get(`/users/${user.id}`)
 		.expect(200)
 		.end( (err, res) => {
 			err 
 			? console.log(err)
 			: (console.log('done'))
 		})
}

exports.testCreateUser = (myAgent, user) => {

 	myAgent
 		.post('/users/createUser')
 		.send(user)
 		.expect(200)
 		.end( (err, res) => {
 			err 
 			? console.log(err)
 			: (console.log('done'))
 		})
}

exports.testDeleteUser = (myAgent, user) => {

 	myAgent
 		.get(`/users/deleteUser/${user.id}`)
 		.expect(200)
 		.end( (err, res) => {
 			err 
 			? console.log(err)
 			: (console.log('done'))
 		})
}

exports.testUpdateUser = (myAgent, user) => {

 	myAgent
 		.get(`/users/updateUser/${user.id}`)
 		.expect(200)
 		.end( (err, res) => {
 			err 
 			? console.log(err)
 			: (console.log('done'))
 		})
}