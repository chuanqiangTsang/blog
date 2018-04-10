
// 获取模板
const theme = require('../Models/theme.js');

module.exports = {
    indexCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/index.ejs', {BaseURL: '/views/' + theme});
            })
        }
    },

    aboutCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/about.ejs', {BaseURL: '/views/' + theme})
            })
        }
    },

    blogCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/blog.ejs', {BaseURL: '/views/' + theme})
            })
        }
    },

    essaysCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/essays.ejs', {BaseURL: '/views/' + theme})
            })
        }
    },

    detailCtrl: (req, res, next) =>{
        if(req){
            theme.getTheme(function(theme){
                res.render(theme + '/detail.ejs', {BaseURL: '/views/' + theme})
            })
        }
    },
}