// 導入jwt 
const jwt = require('jsonwebtoken');
// 宣告校驗token中介函數
module.exports = (req, res, next) => {
    // 獲取token
    let token = req.get('token');
    // 判斷
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失~~~',
            data: null
        })
    }
    // 校驗token
    jwt.verify(token, 'atguigu', (err, data) => {
        // 檢測token是否正確
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token校驗失敗~~~',
                data: null
            })
        }
        // 如果token校驗成功
        next();
    });
};