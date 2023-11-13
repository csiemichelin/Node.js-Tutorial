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
        name: {
            type: String,
            required: true,  // 表明這屬性必須不為空
            unique: true,   // 設置必須為獨一無二的 (unique需要重建集合才有效果)
        },
        author: {
            type: String,
            default: '匿名',    //默認值
        },
        style: {
            type: String,
            enum: ['奇幻', '冒險', '勵志'], //設置的值必須在枚舉的陣列當中
        },
        price: Number
    });

    // 6. 創建模型對象 (對文檔操作的封裝對象)，第一個參數: 集合名稱，第二個參數: 結構對象
    let BookModel = mongoose.model('books', BookSchema);

    // 7. 新增
    BookModel.create({  // 注意: Mongoose 降級到 5.x 版本，才支援這個寫法，執行 npm install mongoose@5 進行降版
        name: '哈利波特',    // 必須存在，所以跳錯
        // author: 'J. K. Rowling',
        style: '奇幻',
        price: 600,
    }, (err, data) => {
        // 判斷是否有錯誤
        if (err) {
            // console.log(err);
            console.log('插入失敗~~~')
            return;
        }
        // 如果沒有出錯，則輸出插入後的文檔對象data
        console.log(data);
        // 8. 關閉數據庫連接 (項目運行過程中，不會運行該代碼，重連會影響效能)
        mongoose.disconnect();
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