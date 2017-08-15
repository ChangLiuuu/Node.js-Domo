/*
*  xxx.com/aaa/   mod1
*  router --- 迷你版的server (简化服务器,用不同的目录对应不同的模块)
*
*  1. 创建router
*  var router = express.Router();
*
*  2. 把 router 添加到 server
*  server.use('/user', router);
*
*  3. router内部
*  router.get('/1.html')
*  router.post('/2.html')
*
*
*  var route1 = express.Router();
*  server.use('/user', router1);
*
*   var r = express.Router();
*   router1.use('/user_reg', r);
*  or
 *  router1.use('/user_reg', function(){});
* */

const express = require('express');

var server = express();
server.listen(8080);

//目录1 /user/
var routeUser = express.Router();

routeUser.get('/1.html', function (req, res) {
   res.send('user1');
});

routeUser.get('/2.html', function (req, res) {
    res.send('user22222');
});

server.use('/user', routeUser);




//目录2 /article/

var articleRouter = express.Router();
server.use('/article', articleRouter);
articleRouter.get('/1001.html', function (req, res) {
    res.send('1001lalalalala');
});