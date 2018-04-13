const Config = require('../Config/config.js')
const mongoose = require('mongoose')
const sd = require('silly-datetime')
const Log = require('../lib/log.js')
mongoose.Promise = global.Promise
const db = mongoose.createConnection('mongodb://'+ Config.host +':'+ Config.port +'/'+ Config.dbname)

db.on('error', (err)=>{
	// 写日志
	var _txt = sd.format(new Date(), 'YYYY-MM-DD HH:mm') + err + '\n' + '\n';
	Log.writeLog(_txt);
	_txt = null;
})


db.on('open',(err)=>{
    if(!err){
        var _txt = sd.format(new Date(), 'YYYY-MM-DD HH:mm') 
        + ' ' + Config.host + ' 数据库' + Config.dbname +' 连接成功' + '\n' + '\n';
		Log.writeLog(_txt);
		_txt = null;
    }
})


db.on('disconnected', (err)=>{
    if(!err){
       var _txt = sd.format(new Date(), 'YYYY-MM-DD HH:mm') 
        + ' ' + Config.host + ' 数据库' + Config.dbname + ' 断开连接' + '\n' + '\n';
		Log.writeLog(_txt);
		_txt = null;
    }
});


db.on('close', (err)=>{
    if(!err){
        var _txt = sd.format(new Date(), 'YYYY-MM-DD HH:mm') 
        + ' ' + Config.host + ' 数据库' + Config.dbname + ' 关闭数据库' + '\n' + '\n';
		Log.writeLog(_txt);
		_txt = null;
    }
});

module.exports = db;