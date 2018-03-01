import express from 'express';
import login from './modules/login/index';
import users from './modules/users/index';
import connection from './modules/connection/index';

import bodyParser from 'body-parser';

let app = express();





app.use(function (req, res, next) {
	res.header(`Access-Control-Allow-Origin`, `*`);
	res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
	res.header(`Access-Control-Allow-Headers`, `Content-Type`);
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/users', users);
app.use('/login', login);


