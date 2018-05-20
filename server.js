// 请求Node.js自带的http模块，并且赋值给http变量
var http=require("http");
var url=require("url");

function start(){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log("Request for"+pathname+"received.");
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("Hello World");
        res.end();
    }
    //向http模块提供的函数createServer传递了一个函数
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start=start;


//“Node.js是事件驱动的”               ---如何理解？？？