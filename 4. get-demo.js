/**
 * Created by liuchang on 8/2/17.
 */

//数据请求 --- 前台： form, ajax, jsonp    ---后台： 一样
//对于后台，无论什么请求方式，对于后台都是http请求。

//请求方式：1. GET : 数据在url中 2. POST：数据不在url中

const http = require('http');
const url_lib = require('url');
var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.write('aaa');
}).listen(8080);