require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const express = require('express')

class AppController{
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.express.use(express.json())
    }
    routes(){
        this.express.use(require('./routes'))
    }
}
// não coloca o .listen aqui , pois quer realizar os testes na aplicação sem colocar o servidor pra escutar
module.exports = new AppController().express // exporta apenas o métodod express