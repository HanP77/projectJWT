import express from 'express';

let login = express.Router();

login.get('/' , (req, res) => {
	res.status(200).send("login fonctionne")
});














export default login ;