/**
 * Created by liuchang on 8/6/17.
 */

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function (req, res) {
    //GET
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const GET = obj.query;

    //POST
    var str = '';
    req.on('data', function (data) {
        str += data;
    });

    req.on('end', function () {
        const POST = querystring.parse(str);
        /*
        * url--要什么
        * GET--get数据
        * POST--post数据
        * */
        console.log('url:',url, '  GET:', GET, '   POST:', POST);


        // 文件请求
        var file_name = './www' + url;
        fs.readFile(file_name, function (err, data) {
            if (err) {
                res.write('404 error - -!');
            } else {
                res.write(data);
            }
        });
    });

}).listen(8080);

// obj {
//  pathname: '/aaa'
//  href: 'http://www.baidu.com/index?name=changchang&password=vvc'
// }
// req.url = '/aaa?a=12&b=5'
