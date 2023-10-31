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
    
    // 7-1. 字段篩選(只讀取文檔中的某些特定屬性，將要返回的屬性設成1，不要預設為0)
    BookModel.find().select({name: 1, author: 1, _id: 0}).exec((err, data) => {
        if (err) {
            console.log('查詢失敗~~~');
            return;
        }
        console.log(data);
    });

    // 7-2. 數據排序(升序設成1，降序設為-1)
    BookModel.find().select({name: 1, price: 1, _id: 0}).sort({price: -1}).exec((err, data) => {
        if (err) {
            console.log('查詢失敗~~~');
            return;
        }
        console.log(data);
    });
    
    // 7-3. 數據擷取(數據由高到低排序，並取出前三名)
    BookModel.find().select({name: 1, price: 1, _id: 0}).sort({price: -1}).limit(3).exec((err, data) => {
        if (err) {
            console.log('查詢失敗~~~');
            return;
        }
        console.log(data);
    });
    // 數據由高到低排序，並取出第四名到第六名
    BookModel.find()
    .select({name: 1, price: 1, _id: 0})
    .sort({price: -1})
    .skip(3)
    .limit(3)
    .exec((err, data) => {
        if (err) {
            console.log('查詢失敗~~~');
            return;
        }
        console.log(data);
    });
});

// 設置連接錯誤的回調
mongoose.connection.on('error', () => {
    console.log('連接失敗');
});

//設置連接關閉的回調
mongoose.connection.on('close', () => {
    console.log('連接關閉');
});

