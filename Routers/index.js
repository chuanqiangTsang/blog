const router = require('./routerCtrl.js')

module.exports =  (app) => {
    app.get('/', router.pageCtrl);

    app.get('/about', router.pageCtrl);

    app.get('/blog', router.pageCtrl);

    app.get('/essays', router.pageCtrl);

    app.get('/detail', router.pageCtrl);

    app.get('/register', router.registerCtrl);

    app.get('/login', router.loginCtrl);
    
}