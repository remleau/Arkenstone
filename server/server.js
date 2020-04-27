const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthMiddleware = require('./middlewares/AuthMiddleware');
// require('./Database.js').init();

const port = process.env.PORT || 5000;
const env = process.env.ENV || 'development';

const server = app.listen(port);
const io = require('socket.io')(server);

// Production mode
if (env == 'production') {
	const root = require('path').join(__dirname, '..', 'build')
	app.use(express.static(root));
	app.get('*', (req, res) => {
		res.sendFile('index.html', { root });
	});
}

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of application/x-www-form-urlencoded post data
app.use(function (req, res, next) {
	req.io = io;
	next();
});
app.use(AuthMiddleware);

// Routes
app.use('/api', require('./routes'));