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
			type: Sequelize.STRING
		},
		username: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
}

// database.sync()
// 	.then(() => User.create({
// 		firstName: 'Rémy',
// 		lastName: 'Groleau',
// 		username: 'remleau',
// 		email: 'remleau@gmail.com'
// 	}))
// 	.then(user => {
// 		console.log(user.toJSON());
// 	});