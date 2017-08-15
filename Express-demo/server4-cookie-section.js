/*
* cookie   不安全 客户端 4k
* 读取： cookieParser('');
* 发送： res.cookie(name, value, {signed: xx, path: xx, maxAge:xx})
* 删除   res.clearCookie(name);
*
*
* session
* 是基于cookie实现的 服务器会根据浏览器带来的session_id找到session文件读取写入
* 隐患： session劫持
* */

const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();
server.listen(8080);
// cookie

server.use(cookieParser('sdfjosodfij1'));

server.use('/', function (req, res) {
    req.secret = 'sdfjosodfij1';
    res.cookie('user', 'bb66e', {signed: true, path: '/aaa', maxAge: 30*24*3600*1000});  //maxAge (ms)

    console.log(req.cookies);
    console.log(req.signedCookies);
    res.clearCookie('name');
    res.send('ok');
});

/*
*  req.cookies request的是send钱的cookies
* */

// server.use(cookieParser());
//
// server.use('/', function (req, res) {
//    console.log(req.cookies);
// });
