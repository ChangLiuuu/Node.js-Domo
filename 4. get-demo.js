/**
 * Created by liuchang on 8/2/17.
 */

//数据请求 --- 前台： form, ajax, jsonp    ---后台： 一样
//对于后台，无论什么请求方式，对于后台都是http请求。

//请求方式：1. GET : 数据在url中 2. POST：数据不在url中

    // 使用querystring parse URL 只能解析 query部分 xxx=y&xxxx=rrr
const http = require('http');
const quarystring = require('querystring');
var server = http.createServer(function (req, res) {
    var GET = {};
    var urladd;
    if (req.url.indexOf('?') !== -1) {
        var arr = req.url.split('?');
        urladd = arr[0];
        GET = quarystring.parse(arr[1]);

    } else {
        urladd = req.url;
    }
    console.log(urladd ,'-----' , GET);
    res.write('aaa');
    res.end();
})
    // .listen(8080);

    //使用url parse URL
const urlLib = require('url');
var obj = urlLib.parse("http://www.baidu.com/index?name=changchang&password=vvc");

var obj1 = urlLib.parse("http://www.baidu.com/index?name=changchang&password=vvc", true);

/* 给true：    query就分割成了JSON: { name: 'changchang', password: 'vvc' },
  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=changchang&password=vvc',
query: 'name=changchang&password=vvc',
  pathname: '/index',
  path: '/index?name=changchang&password=vvc',
  href: 'http://www.baidu.com/index?name=changchang&password=vvc' }
 */

var urladd = obj1.pathname;
var GET = obj1.query;

//console.log(urladd, GET);

var server1 = http.createServer(function (req, res) {

    var obj2 = urlLib.parse(req.url,true);
    var GET = obj2.query;
    console.log(GET);
}).listen(8080);
