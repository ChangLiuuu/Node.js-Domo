/**
 * Created by liuchang on 8/2/17.
 */

const fs = require('fs');

// readFile('aaa.txt', 回调函数 function(err, data) {
//      if (err) {
//
//      }
// });

fs.readFile('fs-input.txt', function(err, data) {
    if (err) {
        console.log('error exits');
    }
    console.log(data.toString());
});

// writeFile(文件名，内容，回调（err）); 回调函数没有data 因为从外面输出的
fs.writeFile('fs-output.txt', "wowoow",  function (err) {
    if (err) {
        console(err);
    }
    console.log("The file was saved");
});