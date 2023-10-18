// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
// GET方法
app.get('/home', (req, res) => {
    res.end('Hello Express!');
});
app.get('/', (req, res) => {
    res.end( 'Express Home');
});
// POST方法
app.post('/login', (req, res) => {
    res.end('Express Login');
});
// 匹配所有的方法
app.all('/test', (req, res) => {    
    res.end('Express Test');
});
// 404 響應 (前面函數都匹配不了才會進來這裡)
app.all('*', (req, res) => { 
    res.end('404 Not Found');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})