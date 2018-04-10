
// 获取模板
const theme = require('../Models/theme.js');

module.exports = {
    indexCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/index.ejs');
            })
        }
    }
}