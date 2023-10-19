// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 呼叫靜態資源中介函數 (會自動把mime類型補上)
app.use(express.static(__dirname + '/尚品匯'));

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})