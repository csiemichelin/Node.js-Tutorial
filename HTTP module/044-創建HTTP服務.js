const http = require('http');

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    //response.end("Hello HTTP Server!"); //設置響應封包信息
    response.setHeader('Content-Type', 'text/hmtl;charset=utf-8'); //設置響應封包的header格式，讓其可以顯示中文
    response.end("你好 HTTP Server!");
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:port, arg2:IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443
//每次發HTTP請求時，都會有favicon.ico，此為顯示在瀏覽器收藏夾、地址欄和標籤標題前面的個性化圖標