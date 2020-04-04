const jwt = require('jsonwebtoken')
const {promisify} = require('util')

module.exports = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(! authHeader){ // Header de autorização não encontrado, logo usúario não está autenticado
        return res.status(401).json({message : "Token not provided"})
    }

    // verificação de ser o token é válido , `Bearer token_gerado`
    const [, token] = authHeader.split(' ') // pega o token, q está dps do espaço
    try{
        const decoded = await promisify(jwt.verify)(token , process.env.APP_SECRET)

        req.userId = decoded.id
        return next()
    }catch(err){
        return res.status(401).json({message : "Token invalid"})
    }
    return next()
}

