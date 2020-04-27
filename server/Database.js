const models = require('./models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

let database;
if (process.env.ENV == "production"){
	database = new Sequelize("ressourc_mern_app", "ressourc_umern", "(LGsR{o[0X}]", {
		host: process.env.DB_HOST,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	});
}else{
	database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: process.env.DB_HOST,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}); 
}

const User = models.UserModel(database, Sequelize);

const init = async () => {
	await database.sync({ force: true }) // force true will drop the table if it already exists
	.then(() => {
		User.create({
			firstName: 'Rémy',
			lastName: 'Groleau',
			username: 'remleau',
			email: 'remleau@gmail.com',
			role: {
				1: {
					slug: "administrateur",
					label: "Administrateur"
				},
				2: {
					slug: "gestionnaire",
					label: "Gestionnaire"
				},
				3: {
					slug: "employes",
					label: "Employes"
				}
			},
			password: bcrypt.hashSync('allo1234', 8)
		});
		User.create({
			firstName: 'Barry',
			lastName: 'Allen',
			username: 'flash',
			email: 'fastest@man.alive',
			role: {
				1: {
					slug: "gestionnaire",
					label: "Gestionnaire"
				},
				2: {
					slug: "employes",
					label: "Employes"
				}
			},
			password: bcrypt.hashSync('flash', 8)
		});
	});
}

module.exports = {
	init,
	User
};