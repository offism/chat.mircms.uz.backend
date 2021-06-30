require('dotenv').config()

const {env} = process

module.exports = {
	PORT: env.PORT,
	PG_CONNECTION_STRING: env.PG_CONNECTION_STRING,
	JWT_SECRET: env.JWT_SECRET
}
