// 1. 安裝 mongoose
// 2. 導入 mongoose
const mongoose = require('mongoose');

// 設置 strictQuery 為 true
mongoose.set('strictQuery', true);

// 3. 連接 mongodb 服務                      數據庫的名稱
mongoose.connect('mongodb://127.0.0.1:27017/michelin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 4. 設置回調
// 設置連接成功的回調  once 一次   事件回調函數只執行一次
mongoose.connection.once('open', () => {
    // 5. 創建文檔的結構對象
    // 設置集合中文檔的屬性以及屬性值的類型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    });

    // 6. 創建模型對象  對文檔操作的封裝對象    mongoose 會使用集合名稱的複數, 創建集合
    let BookModel = mongoose.model('novel', BookSchema);

    // 7-1. 刪除一條文檔
    BookModel.deleteOne({_id: '6540791a7a7c2354440b2b48'}, (err, data) => {
        // 判斷
        if (err) {
            console.log(err);
            // console.log('刪除失敗~~~');
            return;
        }
        // 輸出data
        console.log(data);
    });

    // 7-2. 批量刪除 (把is_hot = false全刪除)
    BookModel.deleteMany({is_hot: false}, (err, data) => {
        // 判斷
        if (err) {
            console.log(err);
            // console.log('刪除失敗~~~');
            return;
        }
        // 輸出data
        console.log(data);
    });
  
    // 8. 關閉數據庫連接 (項目運行過程中, 不會添加該代碼)
    // mongoose.disconnect();   // 要等刪除完，才能斷開連接
});

// 設置連接錯誤的回調
mongoose.connection.on('error', () => {
    console.log('連接失敗');
});

//設置連接關閉的回調
mongoose.connection.on('close', () => {
    console.log('連接關閉');
});

