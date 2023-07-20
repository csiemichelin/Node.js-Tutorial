//GET請求參數在URL的?之後，且以&區隔不同的GET參數

//導入模塊
const http = require("http");
const fs = require("fs");

const port = 3001;
const ip = "127.0.0.1"; //可以是網域內的任何IP

const sendReponse = (filename, statusCode, response) => {
    fs.readFile(`./html/${filename}`, (error, data) => {    //readfile參數中的call back函數用的兩個參數包含error訊息，和data讀取內容
        if (error) {
            response.statusCode = 500;  //將返回的狀態碼設為500
            response.setHeader("Content-Type", "text/plain");   //定義返回錯誤訊息的格式
            response.end("Sorry, internal error"); //返回報錯訊息
        } else {
            response.statusCode = statusCode;  
            response.setHeader("Content-Type", "text/html");   
            response.end(data);
        }
    });

};  //統一讀取和發送html程式碼

const server = http.createServer((request, response) => {
    console.log(request.url, request.method) //request.url: 返回請求的url頁面，terminal會顯示現在是哪一個html頁面, request.method: 他會返回是http的甚麼請求(GET, POST, ...)

    //GET: 獲取數據, POST: 提交數據
    const method = request.method;
    let url = request.url;    //此url包括GET請求參數，但URL中的pathname就不包含請求參數

    if (method == "GET") {
        const requestURL = new URL(url, `http://${ip}:${port}`);    //透過定義URL物件，之後可以透過此物件取得GET請求參數
        //console.log(requestURL);
        //console.log(requestURL.searchParams.get("lang"));   //獲取名為lang的GET請求參數值
        url = requestURL.pathname;
        const language = requestURL.searchParams.get("lang");
        let langString = new String;

        if (language == null || language == "english") {    //GET請求參數為英文或空
            langString = "";
        } else if (language == "chinese") {
            langString = " - chinese";
        } else {
            langString = "";
        }

        if (url == "/") {   //代表跟目錄也就是主頁面http://127.0.0.1:3001
            sendReponse(`index${langString}.html`, 200, response);
        } else if (url == "/about.html") {
            sendReponse(`about${langString}.html`, 200, response);
        } else {
            sendReponse(`404${langString}.html`, 404, response);
        }
    } else {

    }
    //response.end("Hello From NodeJS Server");   //把字串返回到前端
}); //新增server監聽器去監聽有沒有客戶端發來的請求(request = 請求object, response = 響應object)

server.listen(port, ip, () => { //call back函數因為沒有參數所以只有一個括號
    console.log(`Server is running at http://${ip}:${port}`);
});    //arg1:port, arg2:IP, arg3:call back函數(nodejs server開始監聽時會呼叫這個函數，顯示服務器運行的一些信息)
