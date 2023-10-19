// 1. 導入express
const express = require('express');

// 2. 創建路由對象
const router = express.Router();

// 3. 創建路由規則
// 創建路由函數
router.get('/home', (req, res) => {
    res.end('前臺首頁');
});
router.get('/search', (req, res) => {
    res.end('內容搜索');
});

// 4. 暴露 router
module.exports = router;