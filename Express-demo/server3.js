/*
* server.use(function (req, res, next) {
*
* }) use() 只加函数，所有请求都会执行
*
* */

const express = require('express');
//const queryString = require('querystring');
const mybodyparser = require('./mylibs/my-body-parser');

var server = express();

server.listen(8080);

// 中间件的原理  模拟 body-parser
server.use(mybodyparser);

server.use('/login', function (req, res) {
    console.log(req.body);
})
