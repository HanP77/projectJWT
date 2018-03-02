import express from 'express';
import login from '../login/index';
import users from '../users/index';
import bodyParser from 'body-parser';
import Mongoclient from 'mongodb';

let app = express();
// let _client = '';
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';

// app.use(function (req, res, next) {
//   res.header(`Access-Control-Allow-Origin`, `*`);
//   res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//   res.header(`Access-Control-Allow-Headers`, `Content-Type`);
//   next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

let connection = () => {

	let _client = '';
	let app = express();
	return new Promise ((resolve, reject) => {
		Mongoclient.connect(url,  (err, client) => {
			if (err) console.log('Erro! ', err);
			else {
				console.log("Connected successfully to server");
				app.listen(8000, function () {
					console.log('Listening on port 8000');
					console.log('Client: ' + client);
				});
				_client = client;
				resolve();
			}
		});
	}).then(() => {
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
		app.get('/' , (req, res) => {
			res.status(200).send("home fonctionne")
		});
		users.post('/' , (req, res) => {
			let db = _client.db(dbName);
			let dbCol = db.collection('test')
			let user = {
				username: req.body.username,
				password : req.body.password,
			};

			dbCol.insertOne(user, function (err, result){
				if(err) {
					res.status(404).send(err);
				} else {
					res.status(200).send('Ok');
					console.log(req.body.username);
				}
			});
		});
		login.get('/' , (req, res) => {
			res.status(200).send("login fonctionne")
		});
	})

}

// export {_client};
export default connection;
