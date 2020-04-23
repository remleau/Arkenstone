let router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('./../Database.js');

router.post('/me', function (req, res) {

	const { token } = req.body;

	if(!token){
		res.status(401).send({ error: "Aucun token" });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) res.status(401).send({ error: "Le token à expiré" });

		User.findOne({ where: { id: user.id } })
			.then((user) => {
				if (!user) res.status(404).send({ error: "Une erreur est survenue" });

				req.io.on('connection', (socket) => {
					console.log(socket.adapter.rooms)
					socket.emit('user_connected', {
						firstName: user.firstName,
						lastName: user.lastName
					});
				});

				res.status(200).send({
					firstName: user.firstName,
					lastName: user.lastName,
					username: user.username,
					email: user.email,
					role: "admin",
					token: token
				});
			});

	});

});

router.post('/login', function (req, res) {

	const { username, password } = req.body;

	if (username && password){
		User.findOne({ where: { username: username } })
		.then((user) => {
			if (!user) {
				res.send({ error: "Une erreur est survenue" });
			}

			let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
			if (!passwordIsValid) {
				return res.status(401).send({ error: "Mot de passe ou username invalide" });
			}

			req.io.on('connection', (socket) => {
				socket.emit('user_connected', {
					firstName: user.firstName,
					lastName: user.lastName
				});
			});

			let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
				expiresIn: "1d" // expires in 24 hours
			});

			res.status(200).send({
				firstName: user.firstName,
				lastName: user.lastName,
				username: user.username,
				email: user.email,
				role: "admin",
				token: token
			});

		}).catch((err) => {
			res.status(500).send({ error: "Une erreur est survenue" });
		});
	}else{
		res.status(401).send({ error: "Veuillez entrer votre nom d\'utilisateur et votre Mot de passe!" });
	}

});

router.post('/create', function (req, res) {
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
	}).then(user => {
		res.status(201).send({ user });
	}).catch((err) => {
		res.status(401).send({ err });
	});
});

router.put('/update', function (req, res) {

});

router.delete('/delete', function (req, res) {

});

module.exports = router