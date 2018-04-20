const router = require('./routerCtrl.js')
const doUserCtrl = require('./Api/user.js')

module.exports =  (app) => {
    app.get('/', router.pageCtrl);

    app.get('/about', router.pageCtrl);

    app.get('/blog', router.pageCtrl);

    app.get('/essays', router.pageCtrl);

    app.get('/detail', router.pageCtrl);

    app.get('/register', router.registerCtrl);

    app.get('/login', router.loginCtrl);


    // controller 接口请求
    app.post('/doRegister', doUserCtrl.doRegister)
    app.post('/doCheckUser', doUserCtrl.doCheckUser)
	app.post('/doLogin', doUserCtrl.doLogin)
    app.get('/doLogout', doUserCtrl.doLogout)
}