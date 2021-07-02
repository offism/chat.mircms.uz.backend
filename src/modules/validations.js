const Joi = require('joi')

module.exports = class Validations {
	static UserSignUpValidation(){
		return Joi.object({
			username: Joi.string()
			   .required()
			   .min(4)
			   .max(40)
			   .error(new Error("Username invalid"))
			   .trim()
			   .pattern(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/),
			password: Joi.string()
			   .required()
			   .min(4)
			   .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
               .error(new Error('Invalid password'))
		})
	}
}