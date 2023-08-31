const http = require('http');

//測試url = http://127.0.0.1:9000/search?keyword=h5

//request = 從客戶端發請求給伺服器，response = 伺服器發回應給客戶端

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    //實例化URL對象
    // let url = new URL("/search?a=100&b=200", "http://127.0.0.1:9000");
    let url = new URL(request.url, "http://127.0.0.1:9000");
    console.log(url);
    console.log(url.pathname);  //輸出URL路徑
    console.log(url.searchParams.get("keyword"));   //輸出URL的keyword查詢字串
    response.end("url new");
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443