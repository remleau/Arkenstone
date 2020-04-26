module.exports = (database, Sequelize) => {
	return database.define('User', {
		firstName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastConnexion: {
			type: Sequelize.DATE,
		}
	});
}