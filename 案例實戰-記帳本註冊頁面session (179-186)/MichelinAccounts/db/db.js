/**
 * 將mongoose代碼重複的部分移過來
 * @param {*} success 數據庫連接成功的回調
 * @param {*} erro 數據庫連接失敗的回調
 */

module.exports = function (success, error) {
    // 內部判斷連接失敗，而不是用error函數當作參數傳遞進來
    // 判斷err為其設置一個默認值
    if (typeof error !== 'function') {
        error = () => {
            console.log('連接失敗~~~');
        }
    }
    // 安裝 mongoose
    // 導入 mongoose
    const mongoose = require('mongoose');
    // 導入配置文件，直接使用結構付值
    const {DBHOST, DBPORT, DBNAME} = require('../config/config');
    // console.log(DBHOST + ':' + DBPORT+ '/' + DBNAME);
    
    // 設置 strictQuery 為 true (不影響後面運行)
    mongoose.set('strictQuery', true);

    // 連接 mongodb服務                       數據庫名稱(若不存在則自動創建)                                    
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    // 設置回調函數
    // 設置連結成功的回調，不用on用once，讓事件回調函數只執行一次
    // 這麼做可以防止mongoDB伺服器關閉重連後，每次都會執行此回調函數，若此函數功能塞很多會導致效能降低
    mongoose.connection.once('open', () => {
        success();
    });

    // 設置連結失敗的回調
    mongoose.connection.on('error', () => {
        error();
    });

    // 設置連結關閉的回調
    mongoose.connection.on('close', () => {
        console.log('連接關閉');
    });
}
