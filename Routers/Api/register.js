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
	}
}