const request = require('supertest') // pode testar ROTAS agora
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe("authencation" , () =>{
    beforeEach(async () => {
        await truncate() // wait the promises 
    })
    it("should  authenticate with valid credentials " ,async () =>{
        const user = await factory.create('User' , {
            password: "123"
        })
        console.log(user)
        const response = await request(app)
        .post('/session') // quer realizar método post na rota /session
            .send({
                email: user.email,
                password: "123"
            })
            expect(response.status).toBe(200)
        })

    it("should not authenticate with invalid credentials " ,async () =>{
        const user = await factory.create('User' , {
            password: "12345"
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
        const user = await factory.create('User' , {
            password: "1234"
        })
    
        const response = await request(app)
        .post('/session') // quer realizar método post na rota /session
            .send({
                email: user.email,
                password: "1234"
            })
            //console.log(response.body)
            expect(response.body).toHaveProperty("token")
    })

    it("should able acess private routes when authenticated" , async()=>{
        const user = await factory.create('User' , {
            password: "1234"
        })
    
        const response = await request(app)
        .get('/dashboard') // quer realizar método post na rota /session
        //authorization é HEADER. Bearer é necessário para enviar um token JWT
        .set('Authorization' , `Bearer ${user.generateToken()}`)    
            
        //console.log(response.body)
        expect(response.status).toBe(200)
    })

    it("should not be able acess private routes when without jwt token" , async()=>{
        const user = await factory.create('User' , {
            password: "1234"
        })
    
        const response = await request(app).get('/dashboard') // quer realizar método post na rota /session
        
        expect(response.status).toBe(401)
    })
})