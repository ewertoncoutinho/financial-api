const supertest = require('supertest')
const request = supertest('http://localhost:3001')
test('Porta 300', () => {
	return request.get('/').then((res) => expect(res.status).toBe(200))
})
