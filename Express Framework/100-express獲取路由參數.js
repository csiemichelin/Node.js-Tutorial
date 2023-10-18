//路由參數: URL路經中的參數(通常放商品的數據)，與查詢字符串不同

// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
// app.get('/100037199931.html', (req, res) => {   //但商品數以萬計，不要用這個方法
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.end('商品詳情');
// });
app.get('/:ProductID.html', (req, res) => {   
    console.log(req.params.ProductID);  //獲取URL路由參數(才能做不同的響應)
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('商品詳情');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})