/**
 * cookie通常是用戶登入時，伺服器會返回一個cookie給用戶
 * 用戶登出時，則伺服器會刪除cookie
 */

// 導入express
const express = require('express');
const cookieParser = require('cookie-parser');

// 創建應用對象
const app = express();
app.use(cookieParser());    // 設置全局中介函數

// 創建路由規則函數 (發送請求後，輸入http://127.0.0.1:3000，查看響應體有沒有cookie，請求體第一次發送不會有正確的cookie資訊)
app.get('/set-cookie', (req, res) => {
    // 1. 方法一: 會在瀏覽器關閉的時候，銷毀
    // res.cookie('name', 'michelin1'); //第一個參數: 鍵名(cookie name), 第二個參數: 鍵值
    // 2. 方法二: 對cookie設置生命週期
    res.cookie('name', 'michelin2', {maxAge: 60 * 1000}); //maxAge以毫秒為單位，範例為設置一分鐘    
    res.cookie('theme', 'blue'); 
    res.send('home');
});

// 刪除cookie
app.get('/remove-cookie', (req, res) => {
    // 呼叫函數
    res.clearCookie('name');
    res.send('刪除成功');
});

// 獲取cookie
app.get('/get-cookie', (req, res) => {
    // 獲取cookie
    console.log(req.cookies);
    // res.send('獲取 cookie');
    res.send(`歡迎您 ${req.cookies.name}`);
});

// 啟動服務
app.listen(3000);