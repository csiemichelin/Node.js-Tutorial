var express = require('express');
var router = express.Router();

/* GET users listing. */
// 相當於輸入 127.0.0.1:3000/users，就會進行以下響應
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 相當於輸入 127.0.0.1:3000/users/test，就會進行以下響應
router.get('/test', function(req, res, next) {
  res.send('用戶測試');
});

module.exports = router;
