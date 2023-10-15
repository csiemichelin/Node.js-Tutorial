// 輸入 /** 按下 Enter 後，VSCode 自動生成了一個多行註解
/**
 * 創建一個HTTP服務，端口為9000，滿足如下請求
 * GET  /HTML/058-index.html    響應    page/HTML/058-index.html的文件內容
 * GET  /CSS/058-app.css        響應    page/CSS/058-app.css的文件內容
 * GET  /Images/058-logo.png    響應    page/Images/058-mickey.png的文件內容
 */

//目標: 搭建HTTP服務，伺服器會響應一個4行3列的表格，並且要求表格有格行換色效果，且點擊單元格能高亮顯示

const http = require('http');
const fs = require('fs');
const path = require('path');
//宣告mime對應類型
let mimies = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    if(request.method != "GET") {  //用POST方法並非GET請求，則返回錯誤
        response.statusCode = 405;
        response.end("<h1>405 Method Not Allowed</h1>");
        return;
    }   //測試方式: 1. 先執行此程式 2. 開啟065-form.html，此html會向058-index.html發送POST請求
    
    //因為請期會有css和js和html，所以要根據不同的請求，發送不同的響應
    //根據pathname區分
    let {pathname} = new URL(request.url, "http://127.0.0.1");
    //拼接文件路徑
    let root = __dirname + "\\";   //網站根目錄
    //console.log(root);
    let filepath = root + pathname;
    //讀取文件用非同步的fs API，因為只有學非同步處理的錯誤處理
    fs.readFile(filepath, (err, data) => {
        if (err) {
            console.log(err);
            //設置字元格式
            response.setHeader("content-type", "text/html; charset=utf-8");
            //判斷錯誤的代號
            switch (err.code) {
                case "ENOENT":  //檔案不存在
                    response.statusCode = 404;
                    response.end("<h1>404 Not Found</h1>");
                case "EPERM":   //讀取權限不足，測試url: http://127.0.0.1:9000/HMTL/065-index.httml
                    response.statusCode = 403;
                    response.end("<h1>403 Forbidden</h1>");
                default: //其他未知錯誤
                    response.statusCode = 500;
                    response.end("<h1>Internal Server Error</h1>");
            }
            return;
        }
        //response.setHeader("content-type", "xxx");  //此處不能寫死，可透過讀取副檔名來區分
        //獲取文件的副檔名
        let ext = path.extname(filepath).slice(1);  //.slice(1)是從下一個字元開始擷取，因為不需要副檔名的開頭.
        //獲取文件對應的mime類型
        let type = mimies[ext];
        if (type) {
            //有對應的mime類型, ex: text/html;charset=utf-8      
            response.setHeader("content-type", type + ";charset=utf-8");    //這邊要注意這裡優先級是最高的，如果html的meta標籤設置為其他字元格式，則還是會採用這裡設置的響應頭字元格式
        } else {
            //沒有對應的mime類型
            response.setHeader("content-type", "application/octet-stream");
        }
        //響應文件內容
        response.end(data);
    })
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443
//每次發HTTP請求時，都會有favicon.ico，此為顯示在瀏覽器收藏夾、地址欄和標籤標題前面的個性化圖標