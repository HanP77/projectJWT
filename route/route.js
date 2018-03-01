import express from 'express';

let router = express.Router();
let users = ['Bob', 'Han', 'Derric'];


router.get('/users/:id', (req, res) => {
	let id = req.params.id;
	res.status(200).send(users[id])
});

router.get('/users', (req, res) => {
	res.status(200).send(users)
});

router.get('/', (req, res) => {
	res.status(200).send(users);
});

export default router ;