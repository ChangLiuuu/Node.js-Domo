/**
 * Created by liuchang on 8/2/17.
 */

const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    // req.url => '/index.html' url本身带斜杠
    var file_name = './www' + req.url;

    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(8080);