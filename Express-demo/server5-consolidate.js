/*
* 1 multer : 处理 enctype="multipart/form-data" 类型
* 2 consolidate
* 3 route
* */
const express=require('express');
const expressStatic=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const ejs=require('ejs');
const jade=require('jade');
const consolidate = require('consolidate');

var server=express();

server.listen(8080);
// 1.解析cookie
server.use(cookieParser('sdfsdfsdfdf344'));
//req.cookie;

// 2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name : 'sess',
    keys : arr,
    maxAge : 20 * 60 * 1000 // 20 mins
}));

// 3.post数据
server.use(bodyParser.urlencoded({extended : false}));
server.use(multer({dest : '.www/upload'}).any());


// 4. 配置模板引擎
  //1用哪种模板引擎，输出什么东西
    server.set('view engine', 'html');
  //2模板文件在哪
    server.set('views', './views');
  //3那种模板引擎
    server.engine('html', consolidate.ejs);

// 用户请求
// server.use('/', function (req, res, next) {
//    console.log(req.query, req.body, req.files, req.cookies, req.session) ;
// });
    server.get('/', function (req, res) {
       res.render('1.ejs', {name : 'chang'});
    });


// 5.static数据
server.use(expressStatic('www'));