/*1：引入express框架 创建服务器文件*/
const express = require('express');
/*2：引入中间件解析body-Parser拦截路由请求*/
const bodyParser = require('body-Parser');
/*6：引入路由器*/
const user = require("./routes/user.js");

/*3：创建服务器*/
var app = express();

/*4：设置端口号8080*/
app.listen(3000);

/*5：使用中间件拦截请求 使用核心模块querystring将数据解析为对象*/
app.use(bodyParser.urlencoded({extended:false}));

/*7：托管静态资源文件*/
app.use(express.static('../mafengwo'));


/*8：使用路由器来管理路由*/
app.use("/mfw_user",user);

