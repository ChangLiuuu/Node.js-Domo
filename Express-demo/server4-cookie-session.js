/*
* cookie   不安全 客户端 4k
* 读取： cookieParser('');
* 发送： res.cookie(name, value, {signed: xx, path: xx, maxAge:xx})
* 删除   res.clearCookie('user');  //括号里是名字
* 除了签名，也有 cookie-encryper
*
* 分开对待 req.cookies  req.signedCookies
*
* session
* cookie-session
* 是基于cookie实现的 服务器会根据浏览器带来的session_id找到session文件读取写入
* 隐患： session劫持
* // express:sess.sig 的内容每次访问一直在变
*
* 写入：
* server.use(cookieParser());
* server.use(cookieSession({
*   name:
*   keys: [xx, xx, xxxx, xx]  //必选
*   maxAge:
* }));
*
*
* 读取：
* server.use('/', function(req, res) {
*   req.session;
* });
*
* 删除：
* delete req.session  // 删掉属性的东西 delete命令
* */

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();
server.listen(8080);
// cookie

server.use(cookieParser('sdfjosodfij1'));

server.use(cookieSession({   //放到 cookieParser之后 因为需要cookie里的session_id 不然没法找到session文件
    name : 'sess',
    keys : ['aaa', 'bbb', 'ccc'],
    maxAge : 20 * 60 * 1000 //20mins  (ms)
}));

server.use('/', function (req, res) {
    req.secret = 'sdfjosodfij1';
    res.cookie('user', 'bb66e', {signed: true, path: '/aaa', maxAge: 30*24*3600*1000});  //maxAge (ms)

    // console.log(req.cookies);
    // console.log(req.signedCookies);
    res.clearCookie('user');

    //session
    if (req.session['count'] === undefined) {
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }
    delete  req.session;

    console.log('session', req.session);
    res.send('ok');
});



