const request = require('supertest') // pode testar ROTAS agora
const {User} = require('../../src/app/models')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe("authencation" , () =>{
    beforeEach(async () => {
        await truncate() // wait the promises 
    })
    it("should not authenticate with invalid credentials " ,async () =>{
        const user = await User.create({
            name:"Evandro",
            email: "fulano@gmail.com",
            password_hash: "12345"
        })
        //console.log(user)
        //expect(user.email).toBe("fulano@gmail.com")
    
        const response = await request(app)
        .post('/session') // quer realizar método post na rota /session
            .send({
                email: user.email,
                password: "123"
            })
            expect(response.status).toBe(401)
        })

    it("should return jwk token when authenticated" , async() => {
        const user = await User.create({
            name:"Evandro",
            email: "fulano@gmail.com",
            password: "1234"
        })
    
        const response = await request(app)
        .post('/session') // quer realizar método post na rota /session
            .send({
                email: user.email,
                password: "1234"
            })
            console.log(response.body)
            expect(response.body).toHaveProperty("token")
    })
})