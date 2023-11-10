// 導入mongoose
const mongoose = require('mongoose');
// 創建文檔的結構對象
// 設置集合中的文檔屬性以及屬性值的類型
let AccountSchema = new mongoose.Schema({
    // 標題
    title: {
        type: String,
        required: true,
    },
    // 時間
    time: Date,
    // 支出還是收入類型
    type: {
        type: Number,
        default: -1
    },
    // 金額
    account: {
        type: Number,
        required: true,
    },
    // 備註
    remarks: String
});

// 創建模型對象 (對文檔操作的封裝對象)，第一個參數: 集合名稱，第二個參數: 結構對象
let AccountModel = mongoose.model('accounts', AccountSchema);

// 暴露模型對象
module.exports = AccountModel;