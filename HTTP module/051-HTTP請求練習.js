// 目標:   請求類型    請求地址    伺服器的回應結果
// 1.      GET         /login      登錄頁面
// 2.      GET         /register   註冊頁面

//測試URL = http://127.0.0.1:9000/login && http://127.0.0.1:9000/register

const http = require('http');

const server = http.createServer((request, response) => {
    //1. 獲取請求類型
    //let method = request.method;  
    let {method} = request; 
    //2. 獲取請求的URL路徑
    // let pathname = new URL(request.url, "http:127.0.0.1").pathname;  
    let {pathname} = new URL(request.url, "http://127.0.0.1");  
    response.setHeader('Content-Type', 'text/hmtl;charset=utf-8'); //設置響應封包的header格式，讓其可以顯示中文

    console.log(method);
    console.log(pathname); 
    //3. 判斷
    if (method == "GET" && pathname == "/login") {
        response.end("登錄頁面");   //登錄
    } else if (method == "GET" && pathname == "/register") {
        response.end("註冊頁面");   //註冊
    } else {    //處理/favicon.ico等等
        response.end("not found"); 
    }   
}); //客戶端發送請求給伺服器就會執行此函數

server.listen(9000, () => {
    console.log("服務已啟動... 端口9000監聽中...");
});