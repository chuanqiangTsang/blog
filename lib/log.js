// 写入日志
const fs = require('fs')
module.exports = {
	writeLog: (logtxt, cb)=>{
		fs.appendFile('/blog/log/log.txt', logtxt, function(err){
			if(err){
				return false;
			}else{
				return false;
			}
		})
	}
}