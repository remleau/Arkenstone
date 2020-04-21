const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

	// Headers for the token
	const token = req.body.token;

	if (token){
		// verifies secret and checks if the token is expired
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) throw err;

			next();
		});
	}else {
		res.status(401).send({
			error: "Aucun token"
		});
	}

};