var router = require('express').Router();

router.get('/all', function (req, res) {
	res.send({ users: "Alllllllll of them" });
});

module.exports = router;