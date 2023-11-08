var express = require('express');
var router = express.Router();
// 導入用戶模型
const UserModel = require('../../modules/UserModel');
const md5 = require('md5'); // 用來加密密碼(此為單向加密，無法將處理後的數據恢復為原始數據(無法解密))

// 註冊頁面
router.get('/reg', (req, res) => {
    // 響應HTML內容
    res.render('login/reg');    // 透過模板引擎，參考115-express模板引擎ejs初體驗，因為在app.js設置全局中介函數，所以URL路徑為此
});

// 註冊操作
router.post('/reg', (req, res) => {
    // 登入資訊驗證
    if (!req.body.username || typeof req.body.username !== 'string') {
        res.status(301).send('301 帳號輸入格式錯誤~~~');
        return;
    } else if (!req.body.password || typeof req.body.password !== 'string') {
        res.status(301).send('301 密碼輸入格式錯誤~~~');
        return;
    }
    // 獲取請求體的數據
    // console.log(req.body);
    UserModel.create({...req.body, password: md5(req.body.password)}, (err, data) => {
        if (err) {
            res.status(500).send('註冊失敗，請稍後在試~~~');
            return;
        } 
        res.render('option/success', {msg: '註冊成功', url: '/login'}); // 註冊好要網登錄頁面跳轉
    });
});

// 登錄頁面
router.get('/login', (req, res) => {
    // 響應HTML內容
    res.render('login/login');    
});

// 登錄操作
router.post('/login', (req, res) => {
    // 獲取用戶名和密碼
    let {username, password} = req.body;
    // 查詢數據庫 (密碼數據庫中是加密過的，比對前要先將登錄密碼先做加密)
    UserModel.findOne({username: username, password: md5(password)}, (err, data) => {
        // 判斷
        if (err) {
            res.status(500).send('登錄失敗，請稍後在試~~~');
            return;
        } 
        // 判斷data
        // console.log(data);
        if (!data) {
            return res.send('帳號密碼錯誤~~~');
        }
        
        // 登錄成功響應
        res.render('option/success', {msg: '登錄成功', url: '../account/create'});
    });
    // 響應HTML內容
    // res.render('login/login');    
});

module.exports = router;
