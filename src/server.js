const app = require('./app')
const {User} = require('./app/models/User')

/*User.create({
     name:"evandro" , 
     email: "evandrotvc123@gmail.com" ,
     password_hash: "123"
     })*/


app.listen(process.env.PORT || 3000)