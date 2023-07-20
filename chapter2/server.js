const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hello From NodeJS Server");   //把字串從後端返回到前端
}); //新增server監聽器去監聽有沒有客戶端發來的請求(request = 請求object, response = 響應object)

const port = 3001;
const ip = "140.123.97.154";


server.listen(port, ip, () => { //call back函數因為沒有參數所以只有一個括號
    console.log(`Server is running at http://${ip}:${port}`);
});    //arg1:port, arg2:IP, arg3:call back函數(nodejs server開始監聽時會呼叫這個函數，顯示服務器運行的一些信息)
