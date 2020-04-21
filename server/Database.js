const models = require('./models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}); 

const User = models.UserModel(database, Sequelize);

const init = async () => {
	await database.sync(/*{ force: true }*/) // force true will drop the table if it already exists
	.then(() => User.create({
		firstName: 'Rémy',
		lastName: 'Groleau',
		username: 'remleau',
		email: 'remleau@gmail.com',
		password: bcrypt.hashSync('allo1234', 8)
	}));
	console.log('Tables have synced!')
}

module.exports = {
	init,
	User
};