// 中介軟體為一個回調函數，他可以方便使用者去管理流程中的每個步驟，又可以分為全局中介和路由中介。
// EX: 若要去搭火車，所有人都可以透過進站口進入火車站，而為了搭程某個班次，則特定的某些人才會進去剪票口
//     這裡進站口就為全局中介，剪票口就為路由中介
//     有中介的目的就是不要讓所有人都擠到火車上時才開始做剪票，檢查身分物品，造成混亂

// 輸入/**，Vscode會自動產生多行註解的模板
/**
 * 全局中介函數需求: 伺服器紀錄每個請求的URL和IP位址到一個文件當中
 */

// 導入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 創建應用對象
const app = express();

// 宣告全局中介函數
function RecordMiddleware(req, res, next) { // next是內部函數，此函數執行後會指向後續的路由回調或中介回調函數
    // 獲取當前時間
    var today = new Date();
    // 獲取url和ip
    let {url, ip} = req;    //相當於let url = req.url; let ip = req.ip;
    // 將信息保存在access.log文件中
    fs.appendFileSync(path.resolve(__dirname + '/LOG/105-access.log'), `${today} ${url} ${ip}\r\n`);
    // 呼叫next函數，才會執行後續的路由函數
    next();
}

// 呼叫中介函數
app.use(RecordMiddleware);

// 創建路由函數 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
app.get('/home', (req, res) => {
    res.send('前台首頁');
});
app.get('/admin', (req, res) => {
    res.send('後臺首頁');
});
app.all('*', (req, res) => {
    res.send(`<h1>404 Not Found</h1>`)
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})