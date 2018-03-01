import express from 'express';
import connection from '../connection/index';
import Mongoclient from 'mongodb';
import {_client} from '../connection/index';
import {x} from '../connection/index';
console.log(x);
let users = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';


users.get('/' , (req, res) => {
	res.status(200).send("users fonctionne")
});

users.post('/' , (req, res) => {
	console.log(x);
	console.log(_client);
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
		}
	});
});

export default users ;