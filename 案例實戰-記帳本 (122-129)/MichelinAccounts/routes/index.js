var express = require('express');
var router = express.Router();

/* GET home page. */
// 記帳本列表表單
router.get('/', function(req, res, next) {
  res.render('list');
});
// 添加紀錄
router.get('/create', function(req, res, next) {
  res.render('create');
});

module.exports = router;
