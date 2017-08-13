/**
 * Created by liuchang on 8/8/17.
 */
//引入自己的模块 注意路径 ./    放node_modules文件夹，就可以不加./
    //不加'./' 1.先找系统模块 2.找node_modules文件夹
const mod1 = require('./8. modular');

console.log(mod1.a, mod1.b, mod1.c);