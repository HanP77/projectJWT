import Mongoclient from 'mongodb';
import express from 'express';

// let connection = () => {
// 	let _client = '';
// 	const url = 'mongodb://localhost:27017';
// 	const dbName = 'JWT';
// 	let app = express();

// 	Mongoclient.connect(url,  (err, client) => {
// 		if (err) console.log('Erro! ', err);
// 		else {
// 			console.log("Connected successfully to server");
// 			app.listen(8000, function () {
// 				console.log('Listening on port 8000');
// 			});
// 			return _client = client;
// 		}
// 	});
// }

let test = (a, b) => {
	return (a + b)
}

export default test ;