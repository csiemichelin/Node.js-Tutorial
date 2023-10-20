// 導入express
const express = require('express');
const path = require('path');

// 創建應用對象
const app = express();

// 1. 設置模板引擎為 ejs
app.set('view engine', 'ejs');

// 2. 設置模板引擎文件存放位置(用絕對路徑較好)，模板引擎文件: 具有模板引擎語法內容的文件
app.set('views', path.resolve(__dirname, './views'));

console.log(path.resolve(__dirname, './views'));

// 創建路由函數
app.get('/home', (req, res) => {
    // 3. render 響應
    // render 規則: res.render('模板引擎的文件名', '傳入的數據參數')
    let title = '小魚要成為後端最強!'
    res.render('118-home', {title: title});
    // 4. 創建模板引擎文件 118-home.ejs
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})