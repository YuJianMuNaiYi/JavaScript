"use strict";

//导入http模块
var http = require("http");

// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
  //回调函数接收request喝response对象
  //获得Http请求的method和url
  console.log(`Request.Method:${request.method},Request.Url:${request.url}`);
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  response.writeHead(200, { "Content-Type": "text/html" });
  // 将HTTP响应的HTML内容写入response:
  response.end("<h1>Hello world!</h1>");
});

server.listen(8888);
console.log("server is running at http:127.0.0.1:8888/");
