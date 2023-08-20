const fs = require('fs');

//非同步讀取(多行註解CTRL + /)
// fs.readFile('./觀書有感.txt', (err, data) => {
//     if (err) {
//         console.log("讀取失敗~~\n");
//         return;
//     }
//     console.log(data.toString());  //data is a Buffer，要轉成字串
// });

//同步讀取
let data = fs.readFileSync("./觀書有感.txt");

console.log(data.toString());