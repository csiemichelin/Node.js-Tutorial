//目標: 搭建HTTP服務，伺服器會響應一個4行3列的表格，並且要求表格有格行換色效果，且點擊單元格能高亮顯示

const http = require('http');
const fs = require('fs');

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    //因為請求會有css和js和html，所以要根據不同的請求，發送不同的響應
    //根據pathname區分
    let {pathname} = new URL(request.url, "http://127.0.0.1");
    if (pathname == "/") {
        //讀取HTML文件內容
        let html = fs.readFileSync(__dirname + "/HTML/056-table.html");  //讀出來為buffer
        response.end(html); //end參數可以是buffer，也可以是string
    }  else if (pathname == "/CSS/056-index.css") {
        //讀取CSS文件內容
        let css = fs.readFileSync(__dirname + "/CSS/056-index.css");  //讀出來為buffer
        response.end(css); //end參數可以是buffer，也可以是string
    } else if (pathname == "/056-index.js") {
        //讀取JS文件內容
        let js = fs.readFileSync(__dirname + "/056-index.js");  //讀出來為buffer
        response.end(js); //end參數可以是buffer，也可以是string
    } else {
        response.statusCode = 404;
        response.end("<h1>404 not found</h1>");
    }
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443
//每次發HTTP請求時，都會有favicon.ico，此為顯示在瀏覽器收藏夾、地址欄和標籤標題前面的個性化圖標