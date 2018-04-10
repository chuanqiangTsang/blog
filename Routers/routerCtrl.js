
// 获取模板
const theme = require('../Models/theme.js');

module.exports = {

    pageCtrl: (req, res, next)=>{
        if(req){
            // 获取path
            let path = req.route.path.split('/')[1];
            path = path === '' ? 'index': path;
            theme.getTheme(function(theme){
                res.render(theme + '/'+ path +'.ejs', {BaseURL: '/views/' + theme});
            })
        }
        
    },
}