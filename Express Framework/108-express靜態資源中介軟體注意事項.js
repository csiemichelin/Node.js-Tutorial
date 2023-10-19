// 1. index.html默認為打開的資源，直接輸入127.0.0.1:3000就可以直接得到響應
// 2. 但這樣可會造成靜態資源中介函數與路由函數發生衝突，誰先呼叫誰就響應(因為只能響應一次)
// 3. 通常路由函數響應動態資源，靜態資源中介函數響應靜態資源

// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 呼叫靜態資源中介函數 (會自動把mime類型補上)
app.use(express.static(__dirname + '/STATIC'));

// 創建路由函數 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/', (req, res) => {    //會與默認的資源中介函數發生衝突
    res.end('Express Home');
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})
