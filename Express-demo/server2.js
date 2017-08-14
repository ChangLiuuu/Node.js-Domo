const express = require('express');
const bodyParser = require('body-parser');
const expressStatic = require('express-static');

var server = express();
server.listen(8080);

/*
*  req.query  GET  不需要中间件
*  req.body   POST  需要中间件 body-parser
*  先 server.use(bodyParser.urlencoded({
*    extended : true,  // 扩展模式
*    limit : 2*1024*1024  2MB   // 限制 (默认100kb)
*  })); 再 req.body
*
*
*  链式操作
*
* */

server.use(bodyParser.urlencoded({
    extended : false,
    limit : 2 * 1024 * 1024
}));  // req.body 中的 body 在这一步 define 的

// 处理post请求
server.use('/login', function (req, res) {
    console.log(req.body);
});


// 链式操作
server.use('/a', function (req, res, next) {
    console.log('aaa');
    next();
});

server.use('/a', function (req, res) {
    console.log('bbb');
});


server.use(expressStatic('www'));