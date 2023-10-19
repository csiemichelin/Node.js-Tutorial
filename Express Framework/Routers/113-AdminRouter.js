// 1. 導入express
const express = require('express');

// 2. 創建路由對象
const router = express.Router();

// 3. 創建路由規則
// 創建路由函數
router.get('/admin', (req, res) => {
    res.end('後臺首頁');
});
router.get('/setting', (req, res) => {
    res.end('設置頁面');
});

// 4. 暴露 router
module.exports = router;