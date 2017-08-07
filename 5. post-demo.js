/**
 * Created by liuchang on 8/3/17.
 */
// post 很大要分段，不分段 1 数据堵塞 2 数组出错需要整块重发
var http = require('http');
var querystring = require('querystring');
var server = http.createServer(function (req, res) {
    var str =''; //定义str 拼接接受的数据

    // data - 有一段数据到达(很多次)
    var i = 0;
    req.on('data', function (data) {
        console.log("第${i++}次接收数据:");
        str += data;
    });
    // end - 数据全部到达(一次)
    req.on('end', function () {
        querystring.parse();
        console.log(str);
    })
}).listen(8080);