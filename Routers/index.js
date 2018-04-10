const router = require('./routerCtrl.js')

module.exports =  (app) => {
    app.get('/', router.indexCtrl);
}