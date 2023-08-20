const fs = require('fs');  //導入fs模塊

//同步寫入，原THREAD會等帶I/O THREAD執行完畢才會一起往下繼續執行
fs.writeFileSync("./data.txt", "test");

console.log("1 * 1");