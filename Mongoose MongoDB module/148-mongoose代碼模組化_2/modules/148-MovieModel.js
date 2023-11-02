// 導入mongoose
const mongoose = require('mongoose');

// 創建文檔結構
let MovieSchema = new mongoose.Schema({
    title: String,
    director: String,
});

// 創建模型對象
let MovieModel = mongoose.model('movie', MovieSchema);

// 暴露對象
module.exports = MovieModel;