const http = require('http');

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    console.log(request.method);    //獲取請求封包的類型
    console.log(request.url);    //獲取請求封包的url，但只包含url中的路徑與查詢字串
    console.log(request.httpVersion);   //獲取HTTP協議的版本號
    console.log(request.headers);   //獲取請求封包的header
    console.log(request.headers.host); //獲取請求封包header中的ip跟port
    response.end("Hello HTTP Server!"); //設置響應封包信息
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443