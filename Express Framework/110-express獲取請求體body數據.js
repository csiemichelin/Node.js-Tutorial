/**
 * 按照以下要求搭建HTTP服務
 * 
 * GET      /login      顯示表單網頁
 * POST     /login      上傳用戶數據時，獲取表單中的[用戶名]和[密碼]
 * 
 */
// 導入express
const express = require('express');
const bodyParser = require('body-parser');

// 創建應用對象
const app = express();

// 因為是針對 POST 路由函數，所以使用路由中介函數來實現
// 解析 JSON 格式的請求體的中介函數
const jsonParser = bodyParser.json();
// 解析 querystring 格式的請求體的中介函數 (此範例的請求體格式為這個)
const urlencodedParser = bodyParser.urlencoded({extended: false});

// 創建路由函數 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
// GET方法
app.get('/login', (req, res) => {
    // res.send('表單頁面');
    // 響應HTML文件內容
    res.sendFile(__dirname + '/HTML/110-form.html');
});
// POST方法
app.post('/login', urlencodedParser, (req, res) => {
    // 獲取請求體用戶數據，包含:用戶名和密碼
    console.log(req.body);  // bodyParser.urlencoded 此中介函數執行完，會對請求對象添加 body
    res.send('獲取用戶的數據');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})
