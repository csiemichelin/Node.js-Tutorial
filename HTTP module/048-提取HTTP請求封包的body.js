const http = require('http');

//request = 從客戶端發請求給伺服器，response = 伺服器發回應給客戶端

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    let body = new String();    //宣告一個變數
    request.on('data', chunk => {   //chunk為buffer，把讀出的每一段東西都存到body中
        body += chunk;
    }); //綁定data事件
    request.on('end', () => {
        console.log(body);  //會發現是空字串，因為GET請求，不會有body，因此打開HTML/form.html去輸入帳密發送POST請求進行測試
        response.end("Hello HTTP Server!"); //設置響應封包信息
    }); //綁定end事件
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:port, arg2:IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443