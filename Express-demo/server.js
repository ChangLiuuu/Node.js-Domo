
/*
* 非破坏式的 req res  原生有的 这里都有
* 3种接受用户请求的方法:
* server.get('/' function(req, res) {})
* post()
* use() 通吃
*
*
* midware 中间件
* server.use(expressStatic('/www')); 读取文件夹里的文件
*
* //接口： /login?user=xxx&pass=xxx 返回{ok : true/fasle, msg:'原因'}
* */

const express = require('express');
const expressStatic = require('express-static');

var server = express();   // 1.创建服务
server.listen(8080);   // 2.监听


//用户数据
var users={
    'blue' : '1234',
    'zhangsan' : '1234'
};

server.get('/login', function (req, res) {
    //urlLib.parse(req.url, true).query;  把用户请求的url parse成JSON
    console.log(req.query);
    var user = req.query['user'];
    var pass = req.query['pass'];
    console.log(user[user]);
    if (users[user] === undefined) {  // undefined == null --> true
        res.send({ok : false, msg : 'user does not exists'});
    } else {
        if (users[user] !== pass) {
            res.send({ok : false, msg : 'user or password is wrong'});
        } else {
            res.send({ok : true, msg : 'successful'});
        }
    }
});

server.use(expressStatic('www'));

// server.use('/a.html', function (req, res) {   // 3.处理请求
//     res.send('abc');
// });
//
// server.use('/', function (req, res) {
//     res.send('adbc');
// });
//
