const router = require('./routerCtrl.js')

module.exports =  (app) => {
    app.get('/', router.indexCtrl);

    app.get('/about', router.aboutCtrl);

    app.get('/blog', router.blogCtrl);

    app.get('/essays', router.essaysCtrl)

    app.get('/detail', router.detailCtrl)
    
}