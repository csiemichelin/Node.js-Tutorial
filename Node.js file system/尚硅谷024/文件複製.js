// 需求複製文件夾下的彩虹貓-rainbow.gif
//比較普通寫入跟流式讀寫的佔用空間
const fs = require('fs');
const process = require('process'); //可以計算整個程式，執行時所占用的記憶體空間

// //方法一: readFile，它會將所有資料都讀到記憶體當中，才會進行寫入，所以至少會占用整個複製檔案的空間
// //讀取文件內容
// let data = fs.readFileSync('../尚硅谷023/彩虹貓-rainbow.gif');
// //寫入文件
// fs.writeFileSync('./彩虹貓-rainbow-2.gif', data);
// console.log(process.memoryUsage()); //res為整個記憶體的佔用空間 = 31240192 Byte = 29.79 MB

// 方法二: Stream流式讀寫，最理想狀態只會占用一個64kb的空間，相當於緩衝的大小，但因為通常讀取會比寫入快，所以占用空間會大於一個緩存
// 創建流式對象
const rs = fs.createReadStream("../尚硅谷023/彩虹貓-rainbow.gif");
//創建寫入對象
const ws = fs.createWriteStream("./彩虹貓-rainbow-3.gif");

// //綁定data事件
// rs.on('data', (chunk) => {
//     ws.write(chunk);
// });

// //綁定end事件
// rs.on('end', () => {
//     console.log(process.memoryUsage());
// });

//方法三 = 方式二
rs.pipe(ws);    //相當於建立rs跟ws的管道