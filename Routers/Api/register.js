const formidable = require('formidable')
const sd = require('silly-datetime')
const db = require('../../Models/db.js')
const dbFn = require('../../Models/dbFunction.js')
const mongoose = require('mongoose')
const userSchema = require('../../Models/user.js')
db.model('users',userSchema)

module.exports = {
	doRegister: (req, res, next)=>{
		let form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files) {
	      var userDoc = {
	      	email: fields.email,
	      	loginName: fields.loginName,
	      	nickName: fields.nickName,
	      	password: fields.password,
	      	registerDate: sd.format(new Date(), 'YYYY-MM-DD HH:mm'),
	      }
	      dbFn.insert('users', userDoc, function(err,doc){
	      	if(doc.length > 0){
	      		res.json({State: true, Data: null, Msg: null})
	      	}else{
	      		res.json({State: false, Data: null, Msg: null})
	      	}
	      });
	    });
	},

	doCheckUser: (req, res, next)=>{
		let form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files) {
			dbFn.find('users', fields, function(err, doc){
				if(doc.length > 0){
					res.json({State: false, Data: null, Msg: null})
				}else{
					res.json({State: true, Data: null, Msg: null})
				}
			});
		})
	},

	doLogin: (req, res, next)=>{
		let form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files) {
			var loginInfo = {loginName: fields.loginName, password: fields.password, isDel: {$ne: 1}}
			dbFn.find('users', loginInfo, function(err, doc){
				if(doc.length > 0){
					res.json({State: true, Data: null, Msg: '登录成功'});
					// 将用户信息写入session
					req.session.user = {username: doc[0].loginName, nickName: doc[0].nickName}
					req.session.isLogin = true;
					//todo
					//console.log(req.session);
				}else{
					res.json({State: false, Data: null, Msg: '用户名或密码错误'});
					req.session.user = {username: '', nickName: ''}
					req.session.isLogin = false;
				}
			})
		})
	}
}