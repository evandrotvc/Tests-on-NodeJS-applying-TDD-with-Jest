require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT ||'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true, // habilita nos campos os createdAT e updateAt
    underscored: true, // coloca _ nos nomeds dos bancos
    underscoredAll: true, // coloca _ nos nomeds dos colletions
  }
}