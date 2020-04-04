const routes = require('express').Router()
const SessionController = require('../src/app/controllers/SessionController')
const authMiddlewares = require('./app/middlewares/auth')
// definição das rotas
routes.post('/session' , SessionController.store)

routes.use(authMiddlewares) // autenticação só será aplicada a rotas de a
routes.get('/dashboard', (req, res) =>{
    return res.status(200).send()
})

module.exports = routes