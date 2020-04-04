const request = require('supertest') // pode testar ROTAS agora
const {User} = require('../../src/app/models')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe("authencation" , () =>{
    beforeEach(async () => {
        await truncate() // wait the promises 
    })
    it("should authenticate with valid credentials " ,async () =>{
        const user = await User.create({
            name:"Evandro",
            email: "fulano@gmail.com",
            password_hash: "123"
        })
        //console.log(user)
        //expect(user.email).toBe("fulano@gmail.com")
    
    const response = await request(app)
      .post('/session') // quer realizar método post na rota /session
        .send({
            email: user.email,
            password: "123"
        })
        expect(response.status).toBe(200)
    })
})