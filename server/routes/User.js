var router = require('express').Router();

router.get('/me', function (req, res) {
	res.send({ user: "It's me mario" });
});

router.post('/create', function (req, res) {
	res.send(
		{ 
			user: {
				"username": req.body.username
			}
		}
	);
});

router.put('/update', function (req, res) {
});

router.delete('/delete', function (req, res) {
});

module.exports = router