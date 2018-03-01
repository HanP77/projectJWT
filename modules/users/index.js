import express from 'express';
// import Mongoclient from 'mongodb';


let users = express.Router();
users.get('/' , (req, res) => {

	res.status(200).send("users fonctionne")
});



users.post('/create' , (req, res) => {
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



// export Mongoclient ;
export default users ;