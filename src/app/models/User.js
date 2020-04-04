const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize , DataTypes) => {
    const User = sequelize.define("User" , 
    { // name of da model
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL, // presente somente na models, não é exibida na base de dados
        password_hash: DataTypes.STRING,
    }, 
    { // chave criado para os testes unitários
        hooks: {
            beforeSave: async user => {
                if(user.password){
                    user.password_hash= await bcrypt.hash(user.password , 8)
                }
            }
        }
    }
  )   
    User.prototype.checkPassword = function(password){
       // console.log(this.password_hash)
        return bcrypt.compare(password , this.password_hash)
    }

    User.prototype.generateToken = function(){
         return jwt.sign( {id: this.id} , process.env.APP_SECRET)
     }
    return User
}