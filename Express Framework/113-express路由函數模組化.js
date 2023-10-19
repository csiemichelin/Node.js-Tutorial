// 導入express
const express = require('express');
const HomeRouter = require('./Routers/113-HomeRouter');
const AdminRouter = require('./Routers/113-AdminRouter');

// 創建應用對象
const app = express();

// 用全局中介函數來設定 UTF-8 編碼
app.use((req, res, next) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    next();
});

// 設置全局中介函數
app.use(HomeRouter);
app.use(AdminRouter);

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/admin', (req, res) => {
    res.end('後臺首頁');
});
app.get('/setting', (req, res) => {
    res.end('設置頁面');
});
app.get('*', (req, res) => {
    res.end('<h1>404 Not Found</h1>');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})