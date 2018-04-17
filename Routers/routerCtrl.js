const formidable = require('formidable')
const sd = require('silly-datetime')
const db = require('../Models/db.js')
const dbFn = require('../Models/dbFunction.js')
const mongoose = require('mongoose')
const userSchema = require('../Models/user.js')
db.model('users',userSchema)
module.exports = {
    pageCtrl: (req, res, next)=>{
        if(req){
            var session = req.session;
            if(session.isLogin === true){
                // 获取path
                let path = req.route.path.split('/')[1];
                path = path === '' ? 'index': path;
                dbFn.getTheme('users', session.user.id, function(err, theme){
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