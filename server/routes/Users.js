var router = require('express').Router();
const { User } = require('./../Database.js');

router.get('/all', function (req, res) {
	User.findAll().then(users => {
		res.send({ users });
	}).catch((err) => {
		res.send({ err });
	});
});

module.exports = router;