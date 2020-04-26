var router = require('express').Router();
const { User } = require('./../Database.js');

router.post('/all', function (req, res) {

	User.findAll().then(users => {
		res.status(200).send(users);
	}).catch((err) => {
		res.status(401).send({ err });
	});
	
});

module.exports = router;