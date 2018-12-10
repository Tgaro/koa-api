const http = require('http')
const app = require('../src/app')
const server = http.createServer(app.callback())
const request = require('supertest')
const userModel = require('../src/models/user').model
const authorized = require('../utils/authorized')
const returnUser = async () => {
	let data
	await userModel.findOne({},{_id:0, id:1, user:1, pass:1}, (err, user) => data = user)
	return data
}


describe('routes(): users', () => {

	it('Should return unauthorized', t => {

		const agent = request.agent(server)
		agent
			.get('/users')
			.expect(401)
			.end( (err, res) => t() )
	})
	
	it('Should return users', async t => {

		const authorizedAgent = request.agent(server)
		const loginData = await returnUser()
		authorizedAgent
			.post('/login')
			.send(loginData)
			.expect(302)
			.end(async (err, res) => {
				
				authorized.testUsers(authorizedAgent)
					.then(result => expect(result).toBe('OK'))
					.catch(err => {throw new Error(`Can't validate`)})
				t()
			})
	})

	// it('Should return one user', async t => {

	// 	const authorizedAgent = request.agent(server)
	// 	authorizedAgent
	// 		.post('/login')
	// 		.send(loginData)
	// 		.expect(302)
	// 		.end( async (err, res) => {

	// 			await authorized.testUsersById(authorizedAgent)
	// 			t()
	// 		})
	// })

	// it('Should delete users', async t => {

	// 	const authorizedAgent = request.agent(server)
	// 	authorizedAgent
	// 		.post('/login')
	// 		.send(loginData)
	// 		.expect(302)
	// 		.end( async (err, res) => {

	// 			await authorized.testDeleteUser(authorizedAgent)
	// 			t()
	// 		})
	// })

	// it('Should update one user', async t => {

	// 	const authorizedAgent = request.agent(server)
	// 	authorizedAgent
	// 		.post('/login')
	// 		.send(loginData)
	// 		.expect(302)
	// 		.end( async (err, res) => {

	// 			await authorized.testUpdateUser(authorizedAgent)
	// 			t()
	// 		})
	// })
})