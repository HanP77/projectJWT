// import * as calc from './calculation';
// console.log(calc.sum(5, 9));

import express from 'express';
// Old js var express = require('express');

import router from './users/router';
let app = express();


app.use('/', router);


app.listen('8080', () => {
	console.log('Listening to port 8080')
});