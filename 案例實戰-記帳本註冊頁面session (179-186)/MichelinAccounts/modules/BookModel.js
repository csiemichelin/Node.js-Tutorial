// 導入mongoose
const mongoose = require('mongoose');
// 創建文檔的結構對象
// 設置集合中的文檔屬性以及屬性值的類型
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

// 創建模型對象 (對文檔操作的封裝對象)，第一個參數: 集合名稱，第二個參數: 結構對象
let BookModel = mongoose.model('books', BookSchema);

// 暴露模型對象
module.exports = BookModel;