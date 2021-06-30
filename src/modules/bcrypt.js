const bcrypt = require('bcrypt')
const salt_size = 10

async function generateHash(data){
	return await bcrypt.hash(data , await bcrypt.genSalt(salt_size) )
}

async function compareHash(data , hash){
	return await bcrypt.compare(data, hash)
}

module.exports = {
	generateHash , compareHash
}