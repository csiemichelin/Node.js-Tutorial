// 與 052-設置HTTP伺服器響應message.js 進行對照

// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/response', (req, res) => {
    // 原本操作
    // res.statusCode = 404;
    // res.statusMessage = "I LOVE YOU";
    // res.setHeader("Server", "Fish Nodejs Server"); // Server用來定義伺服器名稱
    // res.write("Test Response");    // 響應BODY設置(可多次呼叫)
    // res.end('Server Response');

    // express響應操作
    // res.status(500);
    // res.set("Server", "Fish Nodejs Server");    // 設置響應頭
    // res.send("測試Express Response");   // 設置響應體，send會自動在響應頭添加'content-type', 'text/html;charset=utf-8'，所以可以用中文
    res.status(500).set("Server", "Fish Nodejs Server").send("測試一連串的Express Response");   // 可合併成一行
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})