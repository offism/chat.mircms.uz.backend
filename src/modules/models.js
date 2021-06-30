module.exports = class Models {
	static async UserModel (Sequelize , sequelize){
		return sequelize.define('users' , {
			user_id:{
				type: Sequelize.DataTypes.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			user_name:{
				type: Sequelize.DataTypes.STRING(40),
				allowNull: false,
				unique:true           
			},
			user_password:{
				type: Sequelize.DataTypes.STRING(128),
				allowNull: false           
			},
			user_socket_ids:{
				type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
				allowNull: true,
				defaultValue: []           
			}
		})	 
	}
}