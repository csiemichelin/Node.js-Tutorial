// 防盜鏈: 禁止該域名以外的其他網站，對資源做訪問
// 由請求頭的referer參數，決定是不是該域名所發出的

/**
 * 由127.0.0.1和localhost兩個不同域名進行測試，雖然背後都指向同一個IP，但域名是不同的
 * 讓127.0.0.1域名顯示圖片，而localhost域名不顯示圖片 
*/

// 導入express
const express = require('express');

// 創建應用對象
const app = express();

// 宣告全局中介防盜鏈函數: 檢查請求頭中的 referer 參數是否為 127.0.0.1
function HotlinkProtection(req, res, next) { // next是內部函數，此函數執行後會指向後續的路由回調或中介回調函數
    // 獲取referer
    let referer = req.get('referer');
    console.log(referer);
    if (referer) {  // referer 可能為空
        // 標準化只需要中間 hostname 的部分
        let UrlStandardization = new URL(referer);
        // 獲取 hostname
        let hostname = UrlStandardization.hostname;
        console.log(hostname);
        // 判斷
        if (hostname != '127.0.0.1') {
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
}

// 呼叫中介函數
app.use(HotlinkProtection);

// 呼叫靜態資源全局中介函數 (會自動把mime類型補上)
app.use(express.static(__dirname + '/STATIC'));

// 監聽端口，啟動服務
app.listen(3000, (req, res) => {
    console.log('服務已經啟動，端口3000正在監聽中...');
})