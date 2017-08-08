/**
 * Created by liuchang on 8/8/17.
 */

/*
* 模块化-----
* 1. 系统模块 querystring, fs, url, http
* 2. 自定义模块
* 3. 包管理器
*
*
* 系统模块：
* 1. Assert断言：只要不这样，程序立马死。  帮助做测试。
*  （Stability 3 - Locked 这个库再也不改了。）
* 2. Crypto：加密 做完加密放进数据库里 MD5 sha256安全级别更高
* 3. DNS
* 4. Events
* 5. HTTPS 安全的http协议，需要申请证书
* 6. Modules : require js语言的一部分
* 7. Net : 注册完发个邮件 不是http协议，用这个
* 8. OS :操作系统信息。 os.loadavg() 负载，wins不能用
* 9. Path : usr/temp/aaa.txt 返回目录名字，文件名，扩展名等等
* 10. Process 和 Children process配合使用
* 11. REPL : node的命令行
* 12. Stream（非常有用）: readFile 读完再发送。 而 Stream 自动读一点发一点
* 13. Timer (非常有用) : 定时器
* setInterval( function() {
*   console.log( Math.random() );
* }, 100 );
* 14. ZLIB :zip lib  做压缩的 1. 老的文件压缩完再存储 2. 压缩完发给用户
* */