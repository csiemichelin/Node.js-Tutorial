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

    // 7-1. 更新一條文檔，第一個參數:選定的內容，第二個參數:要修改成的內容
    BookModel.updateOne({name: '紅樓夢'}, {price: 9.9}, (err, data) => {
        // 判斷err
        if (err) {
            console.log(err);
            return;
        }
        // 輸出data
        console.log(data);
    })
    
    // 7-2. 批量更新
    BookModel.updateMany({author: '餘華'}, {is_hot: true}, (err, data) => {
        // 判斷err
        if (err) {
            console.log(err);
            return;
        }
        // 輸出data
        console.log(data);
    })

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

