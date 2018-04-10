const express = require("express");
const app = express();

// 引入路由
const routes = require("./Routers/index.js");

// 设置模板引擎 ejs 
app.set("view engin", "ejs");


// 公共文件
app.use('/static',express.static('./Static'))

app.use('/views',express.static('./Views'))

routes(app);

app.listen('3005');