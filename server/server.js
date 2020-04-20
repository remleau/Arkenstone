const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const env = process.env.ENV || 'development';

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
// const AuthMiddleware = require('./middlewares/AuthMiddleware');
// app.all('/api/*', AuthMiddleware);

// Routes
app.use('/api', require('./routes'));

// Production mode
if (env == 'production'){
	const root = require('path').join(__dirname, '..', 'build')
	app.use(express.static(root));
	app.get('*', (req, res) => {
		res.sendFile('index.html', { root });
	});
}

app.listen(port, (err) => {
	if(err) throw err;

	console.log(env + " server started")
});