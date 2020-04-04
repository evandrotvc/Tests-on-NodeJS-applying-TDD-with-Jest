const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const authHeader = req.headers.authorization

    if(! authHeader){ // Header de autorização não encontrado, logo usúario não está autenticado
        return res.status(401).json({message : "Token not provided"})
    }
    return next()
}

