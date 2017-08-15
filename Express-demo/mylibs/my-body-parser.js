const queryString = require('querystring');

module.exports = function (req, res, next) {

    //req.body = {xxxx};
    var str = '';  // 会破坏二进制
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        req.body = queryString.parse(str);
        next();
    });
};