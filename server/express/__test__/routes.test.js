const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it("gets the gettime endpoint", async done => {
    const response = await request.get("/gettime")
    expect(response.statusCode).toBe(200)
    expect(response.body.status).toBe(200)
    done() 
})