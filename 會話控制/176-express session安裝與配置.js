/**
 * session 是保存服務器端的一塊數據，保存當前用戶訪問的相關訊息
 * 識別用戶身分，快速獲取用戶的當前訊息
 * step 1: 填寫帳號和密碼校驗身分，通過後創建session信息，然後將session_id的值通過響應頭給瀏覽器(set-cookie)
 * step 2: 下次用戶發送請求會自動攜帶cookie，服務器透過cookie中的session_id的值確定用戶的身分
 */

// 1. 安裝包 npm i express-session connect-mongo
// 2. 導入express-session connect-mongo
const session = require('express-session');
const MongoStore = require('connect-mongo');
// 導入express
const express = require('express');

// 創建應用對象
const app = express();
// 3. 設置sessin全局中介函數
app.use(session({
    name: 'sid',
    
}));

// 創建路由規則函數 (發送請求後，輸入http://127.0.0.1:3000，查看響應體有沒有cookie，請求體第一次發送不會有正確的cookie資訊)
app.get('/set-cookie', (req, res) => {
    res.send('home');
});

// 啟動服務
app.listen(3000);