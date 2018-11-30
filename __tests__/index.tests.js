const request = require('supertest-as-promised')
const app = require('../config/app')
const userModel = require('../app/models/user').model

describe("routes: index", () => {
	it('Should get one user from mongodb', async () => {
		const res = await request(app.listen())
			.get('/')

		expect(res.status).toBe(200)
		expect(res.header['content-type']).toBe('application/json; charset=utf-8')
		expect(parseInt(res.header['content-length'])).not.toBeLessThan(0)
		expect(res.header['content-length']).not.toBe('0')
	})
})