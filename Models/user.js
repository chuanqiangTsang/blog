const mongoose = require('mongoose')
const db = require('./db.js')
const dbFn = require('../Models/dbFunction.js')

const userSchema = new mongoose.Schema({
	email: {type: String},
	loginName: {type: String},
	nickName: {type: String},
	password: {type: String},
	registerDate: {type: Date},
	isDel: {type: Number, default: 0},
	theme: {type: String, default: 'gentleman'}
})


module.exports =  userSchema;