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
	models.User.find({account: user.account}, (err, data) => {
		if(err) res.send(data);
		else {
			if(data.length){
				res.send('用户已存在');
			}else{
				newUser.save((err, data)=>{
					if(err) res.send(err);
					else {
						var token = jwt.sign(user);
						res.send({
							token: token
						});
					}
				})
			}
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
			if(!data.length){
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

router.post('/api/qsnr/createQuestionaire', (req, res) => {
	console.log(req.body);
	var token = req.body.token;
	jwt.verify(token, function(err, data){
		if(err) console.log(err);
		else{
			console.log('Verify: ', data.account);
			let newQsnr = new models.Qsnr({
				account: data.account,
				qsnr: req.body.qsnr,
				state: req.body.state
			});
			newQsnr.save((err, data)=>{
				if(err) res.send(err);
				else {
					res.send('保存成功！');
				}
			})
		}
	})
	
})

module.exports = router;