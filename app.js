const express = require("express");
const app = express();

// 引入路由
const routes = require("./Routers/index.js");

// 设置模板引擎 ejs 
app.set("view engin", "ejs");


routes(app);

app.listen('3005');