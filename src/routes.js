const routes = require('express').Router()
const SessionController = require('../src/app/controllers/SessionController')
// definição das rotas
routes.post('/session' , SessionController.store)

module.exports = routes