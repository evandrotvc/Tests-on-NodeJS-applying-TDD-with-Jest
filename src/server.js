const app = require('./app')
const {User} = require('./app/models/User')

app.listen(process.env.PORT || 3000)