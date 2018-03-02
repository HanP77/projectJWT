import express from 'express';
import login from '../login/index';
import users from '../users/index';
import bodyParser from 'body-parser';
import Mongoclient from 'mongodb';

let app = express();
// let _client = '';
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';

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
				});
				_client = client;
				resolve(_client);
			}
		});
	})
	.then((res) => {
		console.log("Ici");
		console.log(res);
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
	})
}

export default connection;
