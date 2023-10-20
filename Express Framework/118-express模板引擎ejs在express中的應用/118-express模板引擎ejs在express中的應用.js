// 導入express
const express = require('express');
const path = require('path');

// 創建應用對象
const app = express();

// 1. 設置模板引擎為 ejs
app.set('view engine', 'ejs');

// 2. 設置模板引擎文件存放位置(用絕對路徑較好)，模板文件: 具有模板引擎語法內容的文件
app.set('views', path.resolve(__dirname, '/views'));

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/home', (req, res) => {
    res.end('Hello Express!');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})