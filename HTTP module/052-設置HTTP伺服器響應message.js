const http = require('http');

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    //1. 設置響應狀態碼
    response.statusCode = 203;
    //2. 響應狀態的描述
    response.statusMessage = "I LOVE YOU"
    //3. 響應HEADER
    response.setHeader("content-type", "text/html; charset=utf-8");
    response.setHeader("Server", "Fish Nodejs Server"); //Server用來定義伺服器名稱
    response.setHeader("myHeader", "test test test");   //自定義響應頭
    response.setHeader("test", ["a", "b", "c"]); //也可以設置多個同名的響應頭
    //4. 響應BODY設置(可多次呼叫)
    response.write("Test Response");

    response.end(); //若有response.write，則通常end函數不會帶參數，但必須有唯一一個
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443
//每次發HTTP請求時，都會有favicon.ico，此為顯示在瀏覽器收藏夾、地址欄和標籤標題前面的個性化圖標