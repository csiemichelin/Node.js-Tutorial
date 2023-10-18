// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/other', (req, res) => {   //只會挑其中一種響應，無法重複響應
    // 1. 跳轉URL響應
    // res.redirect("http://google.com.tw");
    // 2. 下載響應，需要伺服器上文件的絕對路徑
    // res.download(__dirname + '/package.json');
    // 3. JSON響應(會自動設置mime類型)
    // res.json({
    //     name: 'Michelin Express Test',
    //     slogon: "小魚要成為後端工程的佼佼者"
    // })
    // 4. 響應文件內容(會自動設置mime類型)
    res.sendFile(__dirname + '/HTML/103-test.html');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})