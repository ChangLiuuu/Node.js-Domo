const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const expressStatic = require('express-static');
const fs = require('fs');
objMulter = multer({dest : 'www/upload/'});  //destination

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({extended : false}));

//server.use(objMulter.single("f1"));
//server.use(objMulter.any());

server.post('/aaa', objMulter.any(), function (req, res) {
    //console.log('req.body',req.body); // json文件 而不是 真实的文件  enctype="multipart/form-data"
   // console.log('req.files', req.files); //array文件 存在内存中的 不好，比如好几个GB
});
/*
* 上传完文件名是乱的，为了避免重名。
* */

// 重命名 可以改路径的。
// fs.rename('b.html', 'www/a.html', function (err) {
//     console.log(err);
// });

// path运用
const pathLib = require('path');
var str = 'www/a.html';
var obj = pathLib.parse(str);
//console.log(obj);

server.post('/aa', objMulter.any(), function (req, res) {
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function (err) {
        if (err) {
            res.send('上传失败');
        } else {
            res.send('上传成功');
        }
    });
    console.log('req.files', req.files); //array文件 存在内存中的 不好，比如好几个GB
});

server.use(expressStatic("www"));

