const http = require("http")
var theme = null;

module.exports = {
    getTheme: function(cb){
        http.get('http://localhost:3002/theme', function(req, resone){
                req.on('data', function(data){
                    cb(JSON.parse(data).theme);
                    return false;
                });
        });
    },
    checkUser: function(cb){
        console.log()
    }
}
