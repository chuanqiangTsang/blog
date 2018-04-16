
module.exports = {
    pageCtrl: (req, res, next)=>{
        if(req){
            var session = req.session;
            // todo
            //console.log(session);
            if(session.isLogin === true){
                console.log('登录了');
                return false;
                // 获取path
                let path = req.route.path.split('/')[1];
                path = path === '' ? 'index': path;
                theme.getTheme(function(theme){
                    res.render('Themes/'+ theme + '/'+ path +'.ejs', {BaseURL: '/Views/Themes/' + theme});
                })
            }else{
                res.render('Pages/login.ejs');
            }   
        }
    },

    registerCtrl: (req, res, next)=>{
        if(req){
            res.render('Pages/register.ejs');
        }
    },

    loginCtrl: (req, res, next)=>{
        if(req){
            res.render('Pages/login.ejs');
        }
    }
}