// 導入express
const express = require('express');
// 導入JSON文件
const singers = require('./JSON/101-singers.json').singers;
console.log(singers);

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/singer/:SingerID.html', (req, res) => {
    let SingerID = req.params.SingerID; // 獲取路由參數(字串型態)
    //在陣列中尋找對應的SingerID數據
    let SingerResult = singers.find(item => {
        if (item.id == Number(SingerID)) {  // Number(SingerID): 字串轉整數
            return true;
        }
    });

    // 錯誤判斷
    if (!SingerResult) {
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>`);
        return;
    }
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>${SingerResult.singer_name}</h2>
        <img src="${SingerResult.singer_pic}"/>
    </body>
    </html>
    `);
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})