const Validations = require('../modules/validations.js')
const {generateHash} = require('../modules/bcrypt.js')
const {generateToken} = require('../modules/jwt.js')
const {compareHash} = require('../modules/bcrypt.js')
module.exports = class UserController{
	static async UserPostLoginController(req , res){
    try {
     	const {username , password} = await Validations.UserSignUpValidation().validateAsync(req.body)
    	const user = await req.db.users.findOne({
    		where:{
    			user_name:username
    		}
    	})
       if(!user) throw new Error('User not found')
       
       if(!compareHash(password , user.dataValues.user_password)) throw new Error("Password is incorrect")
        
        res.status(201).json({
          ok:true,
          token: await generateToken(user.dataValues.user_id),
          data:{
          	name: username
          }
        })
        console.log(user)  
    } catch(e) {
       res.status(401).json({
       	ok: false,
       	message: e + ""
       })
    }
	}

	static async UserPostSignUpController(req , res){
    try {
     	const {username , password} = await Validations.UserSignUpValidation().validateAsync(req.body)
        const user = await req.db.users.create({
        	user_password: await generateHash(password),
        	user_name: username
        })

        res.status(201).json({
          ok:true,
          token: await generateToken(user.dataValues.user_id),
          data:{
          	name: username
          }
        })

    } catch(e) {
    	res.status(400).json({
    		ok: false,
    		message: e + ""
    	})
    }
	}
}