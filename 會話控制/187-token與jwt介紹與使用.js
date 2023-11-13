/**
 * 1. token定義
 *      token是服務端生成並返回給HTTP客戶端的一串加密字符串， token中保存著用戶信息
 * 2. token與cookie(& session)的差別
 *      (1) token用於移動端APP，cookie(& session) 多用於網頁端
 *      (2) token數據存在客戶端，服務端壓力比起session更小，且因為是保存在客戶端，因此服務器端擴展性會更好，一個token可以讓多個服務器共享
 *      (3) token採用對稱式加密(有公私鑰)，因此相對更安全
 *      (4) token需要手動攜帶，不會像cookie，會自動攜帶sessiomID，因此可以避免CSRF
 * 3. JWT (JSON Web Token)定義
 *      (1) JWT是目前最流行的跨網域認證解決方案，可以用於token的身分驗證，並使其生成與校驗更有規範
 *      (2) 可以導入jsonwebtoken包來操作token
 */

// 導入jwt
const jwt = require('jsonwebtoken');

// 創建生成token
// let token = jwt.sign(用戶數據, 加密字符串, 配置對像(e.g 生命週期)); 
// let token = jwt.sign({
//     username: 'michelin'
// }, 'atguigu'    // 設置private key對cookie做加密
// , {
//     expiresIn: 60, // 生命週期單位是秒 (此為1分鐘)
// });

// console.log(token);
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pY2hlbGluIiwiaWF0IjoxNjk5NjA5NDgwLCJleHAiOjE2OTk2MDk1NDB9.n6FKblXza-ZbBFP0X1UlV4l7eCGb9YM0NzR_Y6-gnek';

// 校驗token
jwt.verify(t, 'atguigu', (err, data) => {
    if (err) {
        console.log('校驗失敗~~~');
        return;
    }
    console.log(data);
});