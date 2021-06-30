const {verify , sign} =require('jsonwebtoken')
const {JWT_SECRET} = require('../../config.js')


function generateToken(data){
	return await sign(data , JWT_SECRET)
}

function validateJWTToken(token){
	try {
	return await verify(token , JWT_SECRET)
		
	} catch(e) {
    return false
  	}
}

module.exports = {
	generateToken , validateJWTToken
}