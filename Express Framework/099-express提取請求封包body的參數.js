// 與 049-提取HTTP請求message的URL路徑與查詢字串_方法一.js 進行對照

// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/request', (req, res) => {
    //原本操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    //express操作
    console.log(req.path);
    console.log(req.query); //得到查詢字符串，輸入http://127.0.0.1:3000/request?a=100&b=200
    console.log(req.ip); //獲取ip
    console.log(req.get("host"));   //獲取header中的某個參數值

    res.end('Hello Express!');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})