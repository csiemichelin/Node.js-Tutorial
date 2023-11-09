// 導入express
const express = require('express');
// 導入momment
const moment = require('moment');
// 導入帳單列表模型
const AccountModel = require('../../modules/AccountModel');
// 導入中介函數
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

//創建路由對象
const router = express.Router();

// 添加首頁路由函數
router.get('/', (req, res) => {
  // 重定向account，若使用者沒有登入直接訪問首頁，則會在跳轉/account時，被checkLoginMiddleware中介函數發現，最後跳轉到/login
  res.redirect('/account');
});

/* GET home page. */
// 記帳本列表表單
router.get('/account', checkLoginMiddleware, function (req, res, next) {
  // 獲取所有的帳單訊息
  // let accounts = db.get('accounts').value();
  // 讀取集合信息
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      response.status(500).send('讀取失敗~~');
      return;
    }
    console.log(data);
    res.render('account/list', { accounts: data, moment: moment }); // 傳遞accounts參數，而moment參數傳進入讓其可以對時間做格式化
  }); // 參考146-mongoose個性化讀取.js
});

// 添加紀錄
router.get('/account/create', checkLoginMiddleware, function (req, res, next) {
  res.render('account/create');
});

// 新增紀錄
router.post('/account', checkLoginMiddleware, function (req, res, next) {
  // 獲取請求體數據 日期為字串 => new Date()
  // 轉換步驟: "2023-02-24" => Object => new Date() // 透過momment包實現
  // console.log(req.body);  // 參考 110-express獲取請求體body數據.js，但這邊不用添加中介函數，因為外層 app.js(#17 & #18)，已經把其設成全局中介函數了
  AccountModel.create({
    ...req.body,  //此語法代表其內容全部導入，案例實戰-記帳本 (122-129)/MichelinAccounts/route/index.js有用過
    time: moment(req.body.time).toDate()  // 覆蓋原有的time屬性
  }, (err, data) => {
    if (err) {
      res.status(500).send('插入失敗~~~');
    }
    // 成功提醒
    res.render('option/success', { msg: '添加成功喔~~~', url: '/account' });  // 傳msg和url參數進去
  });
});

// 刪除紀錄 (透過路由參數id的方式)
router.get('/account/:id', checkLoginMiddleware, (req, res) => {
  // 獲取路由參數id (參考100-express獲取路由參數.js)
  let id = req.params.id;
  // 刪除
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send('刪除失敗~~~');
      return;
    }
    // 提醒
    res.render('option/success', { msg: '刪除成功喔~~~', url: '/account' });  // 傳msg和url參數進去
  });

});

module.exports = router;
