// 中介軟體為一個回調函數，他可以方便使用者去管理流程中的每個步驟，又可以分為全局中介和路由中介。
// EX: 若要去搭火車，所有人都可以透過進站口進入火車站，而為了搭程某個班次，則特定的某些人才會進去剪票口
//     這裡進站口就為全局中介，剪票口就為路由中介
//     有中介的目的就是不要讓所有人都擠到火車上時才開始做剪票，檢查身分物品，造成混亂

// 輸入/**，Vscode會自動產生多行註解的模板
/**
 * 路由中介函數需求: 針對 /admin /setting 的請求，要求請求URL攜帶 code=512 參數，如未攜帶提示[暗號錯誤]
 */

// 導入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 創建應用對象
const app = express();

// 宣告路由中介函數
function CheckCodeMiddleware(req, res, next) { // next是內部函數，此函數執行後會指向後續的路由回調或中介回調函數
    // 判斷URL中是否code參數為521
    if (req.query.code == '521') {  // 得到查詢字符串
        next();
    }  
    res.send('暗號錯誤');
}

// 創建路由函數 (決定來源端的請求，要送到哪個目的端，並執行目的端的響應回調函數)
// 前台
app.get('/home', (req, res) => {   
    res.send('前台首頁');
});
// 後台
app.get('/admin', CheckCodeMiddleware, (req, res) => {   // 只放到受約束的函數中來呼叫中介函數
    res.send('後臺首頁');
});
// 後台設置
app.get('/setting', CheckCodeMiddleware, (req, res) => { // 只放到受約束的函數中來呼叫中介函數
    res.send('設置頁面');
});
app.all('*', (req, res) => {
    res.send(`<h1>404 Not Found</h1>`)
});

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})