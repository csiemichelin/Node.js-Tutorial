// 導入express
const express = require('express');
// 導入momment
const moment = require('moment');
// 導入帳單列表模型
const AccountModel = require('../../modules/AccountModel');

// 創建路由對象
const router = express.Router();

/* GET home page. */
// 記帳本列表表單
router.get('/account', function (req, res, next) {
    // 獲取所有的帳單訊息
    // 讀取集合信息
    AccountModel.find().sort({ time: -1 }).exec((err, data) => {
        if (err) {  // 接口服響應的狀態碼，已經寫在響應編號code中，所以不用另外設置響應狀態碼
            res.json({
                // 響應編號 (0000表示成功，其餘失敗)
                code: '1001',
                // 響應的信息
                msg: '讀取失敗~~~',
                // 響應的數據(data為讀取到的數據，進行響應)
                data: null
            });
            return;
        }
        // 響應成功提示(改成api就是響應json)
        res.json({
            // 響應編號 (0000表示成功，其餘失敗)
            code: '0000',
            // 響應的信息
            msg: '讀取成功~~~',
            // 響應的數據(data為讀取到的數據，進行響應)
            data: data
        });
    }); // 參考146-mongoose個性化讀取.js
});

// // 添加紀錄 (不需要因為api只返回json，不用返回html)
// router.get('/create', function (req, res, next) {
//   res.render('account/create');
// });

// 新增紀錄
router.post('/account', function (req, res, next) {
    // 表單驗證
    if (!req.body.title || typeof req.body.title !== 'string') {
        res.json({
            code: '1003',
            msg: 'title 輸入格式錯誤~~~',
            data: null
        });
        return;
    } else if (typeof req.body.time !== 'string') {
        res.json({
            code: '1004',
            msg: 'time 輸入格式錯誤~~~',
            data: null
        });
        return;
    } else if (typeof req.body.type !== 'number') {
        res.json({
            code: '1005',
            msg: 'type 輸入格式錯誤~~~',
            data: null
        });
        return;
    } else if (!req.body.account || typeof req.body.account !== 'number') {
        res.json({
            code: '1006',
            msg: 'account 輸入格式錯誤~~~',
            data: null
        });
        return;
    } else if (typeof req.body.remarks !== 'string') {
        res.json({
            code: '1007',
            msg: 'remarks 輸入格式錯誤~~~',
            data: null
        });
        return;
    }
    // req.body可以接收query string或json格式，因為app.js設置了兩個全局中介函數，app.use(express.json()); app.use(express.urlencoded({ extended: false }));
    AccountModel.create({
        ...req.body,  //此語法代表其內容全部導入，案例實戰-記帳本 (122-129)/MichelinAccounts/route/index.js有用過
        time: moment(req.body.time).toDate()  // 覆蓋原有的time屬性
    }, (err, data) => {
        if (err) {
            res.json({
                code: '1002',
                msg: '創建失敗~~~',
                data: null
            });
            return;
        }
        // 成功提醒
        res.json({
            code: '0000',
            msg: '創建成功~~~',
            data: data
        });
    });
});

// 刪除紀錄 (透過路由參數id的方式)
router.delete('/account/:id', (req, res) => {
    // 獲取路由參數id (參考100-express獲取路由參數.js)
    let id = req.params.id;
    // 刪除
    AccountModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.json({
                code: '1007',
                msg: '刪除失敗~~~',
                data: null
            });
            return;
        }
        // 提醒
        res.json({
            code: '0000',
            msg: '刪除成功~~~',
            data: null
        });
    });

});

// 獲取單個帳單信息
router.get('/account/:id', (req, res) => {
    // 獲取路由參數id
    let id = req.params.id;

    AccountModel.findById({ _id: id }, (err, data) => {
        if (err) {
            res.json({
                code: '1008',
                msg: '讀取失敗~~~',
                data: null
            });
            return;
        }
        res.json({
            code: '0000',
            msg: '讀取成功~~~',
            data: data
        });
    });
});

// 更新單個帳單信息
router.patch('/account/:id', (req, res) => {
    // 獲取路由參數id
    let id = req.params.id;

    AccountModel.updateOne({ _id: id }, req.body, (err, data) => {
        if (err) {
            res.json({
                code: '1009',
                msg: '更新失敗~~~',
                data: null
            });
        }
        // 再次查詢數據庫，獲取單條數據 (updateOne回傳的data不是該條數據)
        AccountModel.findById({ _id: id}, (err, data) => {
            // 設置響應
            if (err) {
                res.json({
                    code: '1008',
                    msg: '讀取失敗~~~',
                    data: null
                });
                return;
            }
            res.json({
                code: '0000',
                msg: '更新成功~~~',
                data: data
            });
        });
        
    });
});

module.exports = router;
