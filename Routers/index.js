const router = require('./routerCtrl.js')
const doRegisterCtrl = require('./Api/register.js')

module.exports =  (app) => {
    app.get('/', router.pageCtrl);

    app.get('/about', router.pageCtrl);

    app.get('/blog', router.pageCtrl);

    app.get('/essays', router.pageCtrl);

    app.get('/detail', router.pageCtrl);

    app.get('/register', router.registerCtrl);

    app.get('/login', router.loginCtrl);
    

    // controller 接口请求
    app.post('/doRegister', doRegisterCtrl.doRegister)
}