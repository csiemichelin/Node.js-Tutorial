// 與 051-HTTP請求練習.js 進行對照

// 1. 導入express
const express = require('express');

// 2. 創建應用對象
const app = express();

// 3. 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/home', (req, res) => {
    res.end('Hello Express!');
});

// 4. 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})