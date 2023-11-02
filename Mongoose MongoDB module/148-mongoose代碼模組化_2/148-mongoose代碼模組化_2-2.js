// 導入db
const db = require('./db/148-db');
// 導入MovieModel
const MovieModel = require('./modules/148-MovieModel');

// 呼叫函數
db(() => {
    // 電影的模型對象
    MovieModel.create({title: '蒼鷺與少年', director: '宮崎駿'}, (err, data) => {
        if (err) {
            console.log('插入失敗~~~');
            return;
        }
        console.log('插入成功~~~');
    });
})
