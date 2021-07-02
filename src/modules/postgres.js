const {Sequelize } = require('sequelize')
const {PG_CONNECTION_STRING} = require('../../config.js')

const sequelize = new Sequelize(PG_CONNECTION_STRING , {
  logging: false
})

const {UserModel} = require('./models.js')

async function postgres(){

  let db = {}

  db.users = await UserModel(Sequelize , sequelize)

  await sequelize.sync({force:true})

  return db

} 

module.exports = postgres