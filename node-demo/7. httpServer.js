/**
 * Created by liuchang on 8/7/17.
 */

// 用户注册 登录：
/*
* 接口：
* /user?act=reg&user=aaa&password=123456
* 返回给前台一个JSON {"ok": false, "msg": "原因"}
*
* /user?act=login&user=aaa&password=123456
* 返回给前台一个JSON {"ok": true, "msg": "原因"}
*
* */

const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

var users = {};

var server = http.createServer(function (req, res) {
    var str = '';

   req.on('data', function (data) {
       str += data;
   });
   req.on('end', function () {
       var obj = urlLib.parse(req.url, true);
       const url = obj.pathname;
       const GET = obj.query;
       const POST = querystring.parse(str);

       if (url === '/user') {  //interface
           switch (GET.act) {
               case 'reg':
                   //1. 检查用户是否注册
                   if (users[GET.name]) {
                       res.write('{"ok" : false, "msg": "此用户已注册"}');

                   } else if (GET.name === '') {
                       res.write('{"ok" : false, "msg": "用户名不能为空"}');
                   } else if (GET.pass === '') {
                       res.write('{"ok" : false, "msg": "密码不能为空"}');
                   } else {
                       //2. 插入用户
                       users[GET.name] = GET.pass;
                       res.write('{"ok" : true, "msg": "注册成功"}');
                   }
                   break;
               case 'login':
                   //1. 检查用户是否存在
                   if (users[GET.name] === null) {
                       res.write('{"ok" : false, "msg": "该用户不存在"}');
                   } else if (users[GET.name] !== GET.pass) { //2. 检查用户的密码
                       res.write('{"ok" : false, "msg": "用户名或密码不正确"}');
                   } else {
                       res.write('{"ok" : true, "msg": "登录成功"}');
                   }
                   break;
               default:
                   res.write('{"ok" : false, "msg": "未知act"}');
           }
           res.end();
       } else {   // file
           // 读取文件
           var file_name = './www' + url;
           fs.readFile(file_name, function (err, data) {
               if (err) {
                   res.write('404 - -!');
               } else {
                   res.write(data);
               }
               res.end();
           });
       }

   });
   console.log(users);
});

server.listen(8080);

/*
* 前台访问后台 分为 访问文件 和  访问接口
*
* 文件访问
* http://localhost:8080/1.html
* http://localhost:8080/ajax.js
* http://localhost:8080/1.jpg
*
*
* 接口访问
* http://localhost:8080/user?act=xx...
* */