/**
 * 1. session與cookie的差別
 * (1) 存在的位置
 *      cookie：瀏覽器端
 *      session：伺服器端
 * (2) 安全性
 *      cookie 是以明文的方式存放在客戶端的，安全性相對較低
 *      session 存放於伺服器中，所以安全性相對較好
 * (3) 網路傳輸量
 *      cookie 設置內容過多會增大報文體積， 會影響傳輸效率
 *      session 數據存儲在服務器，只是通過 cookie 傳遞 id，所以不影響傳輸效率
 * (4) 儲存限制
 *      瀏覽器限制單個 cookie 保存的數據不能超過4K ，且單個域名下的存儲數量也有限制
 *      session 數據存儲在服務器中，所以沒有這些限制
 * 2. 流程:
 * step 1: 填寫帳號和密碼校驗身分，通過後創建session信息，然後將session_id的值通過響應頭給瀏覽器(set-cookie)
 * step 2: 下次用戶發送請求會自動攜帶cookie，服務器透過cookie中的session_id的值確定用戶的身分
 */

// 1. 安裝包 npm i express-session connect-mongo(通常exoress-sension只會存在內存中，不好觀察，用此包可以存到數據庫，方便觀察)
// 2. 導入express-session connect-mongo
const session = require('express-session');
const MongoStore = require('connect-mongo');
// 導入express
const express = require('express');

// 創建應用對象
const app = express();
// 3. 設置sessin全局中介函數
app.use(session({
    name: 'sid',    // 設置響應cookie的名字，默認值是: connect.sid
    secret: 'atguigu',  // 設置private key對cookie做加密(對稱式加密: 加解密鑰匙都一樣)
    saveUninitialized: false,   // 若客戶沒有用session，是否每次請求還要在伺服器端設置一個session對象(通常是需要紀錄匿名對象時才會需要)
    resave: true,   // 是否每次請求時，重新保存session，因為session會有生命週期
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project'  // 數據庫的連接配置，porject為數據庫名稱
    }),
    cookie: {   // 返回cookie的內容
        httpOnly: true, // 讓前端無法透過JS的document.coookie去存取，安全性較高
        maxAge: 1000 * 300   // 可以控制cookie和sessionID的生命週期(單位毫秒)
    }
}));

// 首頁路由規則函數
app.get('/', (req, res) => {
    res.send('home');
});

// 登陸路由規則函數 (session的設置)
app.get('/login', (req, res) => {
    // 查詢字符串參數傳對才設置session，username=admin&password=admin
    if (req.query.username == 'admin' && req.query.password == 'admin') {
        // 設置傳入到DB的session信息，此外也會存到瀏覽器的內存中，下次登入就可以直接用req.session.username讀取
        req.session.username = 'admin';
        req.session.uid = '258aefccc';
        // 成功響應
        res.send('登陸成功~~~');
    } else {
        res.send('登陸失敗~~~');
    }
});

// 購物車路由規則函數 (session讀取)
app.get('/cart', (req, res) => {
    // 透過檢查用戶session，判斷使用者有無登入，有登入才可以進入購物車頁面
    if (req.session.username) {
        res.send(`購物車頁面，${req.session.username} 歡迎您`);
    } else {
        res.send('您還沒登入喔~~');
    }
});

// 退出路由規則函數 (session的銷毀)
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出成功~~~');
    });
});


// 啟動服務
app.listen(3000);