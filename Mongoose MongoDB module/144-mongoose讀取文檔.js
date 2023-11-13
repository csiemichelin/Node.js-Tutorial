// 1. 安裝 mongoose
// 2. 導入 mongoose
const mongoose = require('mongoose');

// 設置 strictQuery 為 true (不影響後面運行)
mongoose.set('strictQuery', true);

// 3. 連接 mongodb服務                       數據庫名稱(若不存在則自動創建)                                    
mongoose.connect('mongodb://127.0.0.1:27017/michelin', { useNewUrlParser: true, useUnifiedTopology: true });

// 4. 設置回調函數
// 設置連結成功的回調，不用on用once，讓事件回調函數只執行一次
// 這麼做可以防止mongoDB伺服器關閉重連後，每次都會執行此回調函數，若此函數功能塞很多會導致效能降低
mongoose.connection.once('open', () => {
    // 5. 創建文檔的結構對象
    // 設置集合中的文檔屬性以及屬性值的類型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 6. 創建模型對象 (對文檔操作的封裝對象)，第一個參數: 集合名稱，第二個參數: 結構對象
    let BookModel = mongoose.model('novel', BookSchema);

    // 7-1. 讀取單條文檔
    BookModel.findOne({name: '狂飆'}, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // 輸出data變量的值
        console.log(data);
    });

    // 7-2. 根據ID獲取文檔
    BookModel.findById('6540791a7a7c2354440b2b49', (err, data) => {
        if (err) {
            console.log('讀取失敗~~~');
            return;
        }
        // 輸出data變量的值
        console.log(data);
    });

    // 7-3. 批量獲取特定條件
    BookModel.find({author: '餘華'}, (err, data) => {
        if (err) {
            console.log('讀取失敗~~~');
            return;
        }
        // 輸出data變量的值
        console.log(data);
    });

    // 7-4. 讀取所有
    BookModel.find((err, data) => {
        if (err) {
            console.log('讀取失敗~~~');
            return;
        }
        // 輸出data變量的值
        console.log(data);
    });
});

// 設置連結失敗的回調
mongoose.connection.on('error', () => {
    console.log('連接失敗');
});

// 設置連結關閉的回調
mongoose.connection.on('close', () => {
    console.log('連接關閉');
});