"use strict";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const models = require('./db');
const express = require('express');
const router = express.Router();

const secret = 'kad';

var jwt = require('./jwt');

router.post('/api/login/createAccount', (req, res)=>{
	var user = {
		account: req.body.account,
		password: req.body.password
	}
	let newUser = new models.User(user);
	newUser.save((err, data)=>{
		if(err) res.send(err);
		else {
			var token = jwt.sign(user);
			res.send({
				token: token
			});
		}
	})
})

router.post('/api/login/getAccount', (req, res)=>{
	var user = {
		account: req.body.account,
		password: req.body.password
	}
	models.User.find({account: req.body.account}, (err, data)=>{
		if(err) res.send(err);
		else {
			if(!data.length){//用户不存在
				res.send('用户不存在');
			}else if(data[0].password != req.body.password){
				res.send('密码错误');
			}else {
				var token = jwt.sign(user);
				res.send({
					token: token
				});
			}
		}
	})
})

module.exports = router;