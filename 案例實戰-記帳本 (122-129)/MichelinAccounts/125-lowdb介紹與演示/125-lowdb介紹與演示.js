// lowdb只用來保存簡單數據，其他的還是要建立資料庫才行
// 1. 導入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
// 2. 會把數據存入該文件
const adapter = new FileSync('db.json') 
// 3. 獲取db對象
const db = low(adapter) 

// 4. 初始化數據
// db.defaults({ posts: [], user: {} }).write()

// 5. 寫入數據
// db.get('posts').push({ id: 1, title: '小魚第一次測試 lowdb'}).write()   // 數組最後面添加
db.get('posts').unshift({ id: 2, title: '小魚第二次測試 lowdb'}).write()   // 數組最前面添加

// 6. 獲取全部數據
console.log(db.get('posts').value());

// 7. 獲取單調數據
let findres = (db.get('posts').find({id: 1})).value();
console.log(findres);

// 8. 刪除數據
let removeres = db.get('posts').remove({id: 2}).write();  // 返回值為刪除的對象
console.log(removeres);   

// 9. 更新數據
db.get('posts').find({id: 1}).assign({title: '今天下雨啦，啊啊啊~'}).write(); 
