//1. 安裝 mongoose
//2. 導入 mongoose
const mongoose = require('mongoose');

//設置 strictQuery 為 true
mongoose.set('strictQuery', true);

//3. 連接 mongodb 服務                        數據庫的名稱
mongoose.connect('mongodb://127.0.0.1:27017/michelin', { useNewUrlParser: true, useUnifiedTopology: true });

//4. 設置回調
// 設置連接成功的回調  once 一次   事件回調函數只執行一次
mongoose.connection.once('open', () => {
  //5. 創建文檔的結構對象
  //設置集合中文檔的屬性以及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 創建模型對象  對文檔操作的封裝對象    mongoose 會使用集合名稱的複數, 創建集合
  let BookModel = mongoose.model('novel', BookSchema);

  //7. 新增
  BookModel.insertMany([{
    name: '西遊記',
    author: '吳承恩',
    price: 19.9,
    is_hot: true
  }, {
    name: '紅樓夢',
    author: '曹雪芹',
    price: 29.9,
    is_hot: true
  }, {
    name: '三國演義',
    author: '羅貫中',
    price: 25.9,
    is_hot: true
  }, {
    name: '水滸傳',
    author: '施耐庵',
    price: 20.9,
    is_hot: true
  }, {
    name: '活著',
    author: '餘華',
    price: 19.9,
    is_hot: true
  }, {
    name: '狂飆',
    author: '徐紀周',
    price: 68,
    is_hot: true
  }, {
    name: '大魏能臣',
    author: '黑男爵',
    price: 9.9,
    is_hot: false
  },
  {
    name: '知北遊',
    author: '洛水',
    price: 59,
    is_hot: false
  },{
    name: '道君',
    author: '躍千愁',
    price: 59,
    is_hot: false
  },{
    name: '七煞碑',
    author: '游泳的貓',
    price: 29,
    is_hot: false
  },{
    name: '獨遊',
    author: '酒精過敏',
    price: 15,
    is_hot: false
  },{
    name: '大潑猴',
    author: '甲魚不是龜',
    price: 26,
    is_hot: false
  },
  {
    name: '黑暗王者',
    author: '古羲',
    price: 39,
    is_hot: false
  },
  {
    name: '不二大道',
    author: '文刀手予',
    price: 89,
    is_hot: false
  },
  {
    name: '大潑猴',
    author: '甲魚不是龜',
    price: 59,
    is_hot: false
  },
  {
    name: '長安的荔枝',
    author: '馬伯庸',
    price: 45,
    is_hot: true
  },
  {
    name: '命運',
    author: '蔡崇達',
    price: 59.8,
    is_hot: true
  },
  {
    name: '如雪如山',
    author: '張天翼',
    price: 58,
    is_hot: true
  },
  {
    name: '三體',
    author: '劉慈欣',
    price: 23,
    is_hot: true
  },
  {
    name: '秋園',
    author: '楊本芬',
    price: 38,
    is_hot: true
  },
  {
    name: '百年孤獨',
    author: '范曄',
    price: 39.5,
    is_hot: true
  },
  {
    name: '在細雨中呼喊',
    author: '餘華',
    price: 25,
    is_hot: true
  },], (err, data) => {
    //判斷是否有錯誤
    if (err) {
      console.log(err);
      return;
    }
    //如果沒有出錯, 則輸出插入後的文檔對象
    console.log(data);
    //8. 關閉數據庫連接 (項目運行過程中, 不會添加該代碼)
    mongoose.disconnect();
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

