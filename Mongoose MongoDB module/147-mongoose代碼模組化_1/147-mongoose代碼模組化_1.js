// 導入db文件
const db = require('./db/147-db');
// 導入mongoose
const mongoose = require('mongoose');

// 呼叫函數 (有兩個函數參數succsee和error)
db(() => {  // success函數
    // 5. 創建文檔的結構對象
    // 設置集合中的文檔屬性以及屬性值的類型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 6. 創建模型對象 (對文檔操作的封裝對象)，第一個參數: 集合名稱，第二個參數: 結構對象
    let BookModel = mongoose.model('books', BookSchema);

    // 7. 新增
    BookModel.create({  // 注意: Mongoose 降級到 5.x 版本，才支援這個寫法，執行 npm install mongoose@5 進行降版
        name: '害你巴豆',
        author: 'J. K. Rowling',
        price: 600
    }, (err, data) => {
        // 判斷是否有錯誤
        if (err) {
            console.log(err);
            return;
        }
        // 如果沒有出錯，則輸出插入後的文檔對象data
        console.log(data);
        // 8. 關閉數據庫連接 (項目運行過程中，不會運行該代碼，重連會影響效能)
        mongoose.disconnect();
    });
}, () => { // error函數
    console.log('連接失敗~~~');
});




