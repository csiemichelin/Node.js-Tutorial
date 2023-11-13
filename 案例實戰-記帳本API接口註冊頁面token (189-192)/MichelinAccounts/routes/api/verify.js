// 導入express
const express = require('express');
// 導入用戶模型
const UserModel = require('../../modules/UserModel');
const md5 = require('md5'); // 用來加密密碼(此為單向加密，無法將處理後的數據恢復為原始數據(無法解密))

// 創建路由對象
const router = express.Router();

// 登錄操作
router.post('/login', (req, res) => {
    // 獲取用戶名和密碼
    let {username, password} = req.body;
    // 查詢數據庫 (密碼數據庫中是加密過的，比對前要先將登錄密碼先做加密)
    UserModel.findOne({username: username, password: md5(password)}, (err, data) => {
        // 判斷
        if (err) {
            res.json({
                code: '2001',
                msg: '數據庫讀取失敗~~~',
                data: null
            });
            return;
        } 
        if (!data) {
            return res.json({
                code: '2002',
                msg: '用戶帳號或密碼錯誤~~~', 
                data: null
            });
        }

        // 創建當前用戶的token
        let token = jwt.sign({
            username: data.username,
            _id: data._id
        }, 'atguigu'    // 設置private key對cookie做加密
        , {
            expiresIn: 60 * 60 * 24 * 7 // 生命週期單位是秒 (此為1週)
        });
        // 響應token
        res.json({
            code: '0000',
            msg: '登錄成功~~~',
            data: token
        });
    }); 
});

// 退出登錄
// 對資源操作盡量不要用GET，防止CSRF攻擊，如果是獲取數據或返回數據就可以用GET
router.post('/logout', (req, res) => {
    // 銷毀session
    req.session.destroy(() => {
        res.render('option/success', {msg: '退出成功', url: '/login'});    
    });
});

module.exports = router;
