var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 顯示網頁表單
router.get('/portrait', (req, res) => {
  res.render('portrait');
});
// 處裡文件上傳
router.post('/portrait', (req, res) => {
  res.send('成功');
});

module.exports = router;
