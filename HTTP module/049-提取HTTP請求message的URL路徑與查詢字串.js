const http = require('http');
const url = require('url');

//測試url = http://127.0.0.1:9000/search?keyword=h5

//request = 從客戶端發請求給伺服器，response = 伺服器發回應給客戶端

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    //console.log(request.url);   //解析request.url，雖然也可以，但只包含url中的路徑與查詢字串，用起來不方便
    let res = url.parse(request.url, true);   //解析request.url，若第二個參數設為true，則query查詢字串會設置為一個object
    console.log(res);   //會發現query屬性的查詢字串變成object
    let pathname = res.pathname;    //獲取url路徑
    console.log(pathname);
    let keyword = res.query.keyword;    //獲取url的查詢字串(keyword)
    console.log(keyword);   //favicon.ico請求，因為沒有keyword查詢字串，所以是undefined
    response.end("url");
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:port, arg2:IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443