var express = require('express');
var router = express.Router();
// 導入lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// 會把數據存入該文件
const adapter = new FileSync(__dirname + '/../data/db.json');
// 獲取db 對象
const db = low(adapter);
// 導入shortid
const shortid = require('shortid');

/* GET home page. */
// 記帳本列表表單
router.get('/', function(req, res, next) {
  // 獲取所有的帳單訊息
  let accounts = db.get('accounts').value();
  res.render('list', {accounts: accounts}); // 傳遞accounts參數
});
// 添加紀錄
router.get('/create', function(req, res, next) {
  res.render('create');
});
// 新增紀錄
router.post('/', function(req, res, next) {
  // 獲取請求體數據
  console.log(req.body);  // 參考 110-express獲取請求體body數據.js，但這邊不用添加中介函數，因為外層 app.js(#17 & #18)，已經把其設成全局中介函數了
  // 生成id，用來區分每次存到db.json的資料
  let id = shortid.generate();
  // 寫入文件 (往前添加，讀取時可以較方便讀最近的)
  db.get('accounts').unshift({id: id, ...req.body}).write();
  // res.send('添加紀錄');
  // 成功提醒
  res.render('success', {msg: '添加成功喔~~~', url: '/account'});  // 傳msg和url參數進去
});
// 刪除紀錄 (透過路由參數id的方式)
router.get('/:id', (req, res) => {
  // 獲取路由參數id (參考100-express獲取路由參數.js)
  let id = req.params.id;
  // 刪除
  db.get('accounts').remove({id: id}).write();
  // 提醒
  // res.send('刪除成功');
  res.render('success', {msg: '刪除成功喔~~~', url: '/account'});  // 傳msg和url參數進去
});

module.exports = router;
