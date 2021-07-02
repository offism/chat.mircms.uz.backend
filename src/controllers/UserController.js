module.exports = class UserController{
	static async UserPostLoginController(req , res){
    res.json({
    	ok:"server is working!"
    })
	}

	static async UserPostSignUpController(req , res){
    res.json({
    	ok:"server is working!"
    })
	}
}