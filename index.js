// import express from 'express';
import test from './modules/connection/index';
// import login from './modules/login/index';
// import users from './modules/users/index';

// import bodyParser from 'body-parser';

// let app = express();



console.log(test(1, 1));
// connection().then( () => {
// 	app.use(function (req, res, next) {
// 		res.header(`Access-Control-Allow-Origin`, `*`);
// 		res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
// 		res.header(`Access-Control-Allow-Headers`, `Content-Type`);
// 		next();
// 	});

// 	app.use(bodyParser.json());
// 	app.use(bodyParser.urlencoded({
// 		extended: true
// 	}));

// 	app.use('/users', users);
// 	app.use('/login', login);
// });