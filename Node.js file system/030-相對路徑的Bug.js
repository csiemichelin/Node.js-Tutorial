const fs = require('fs');

//Bug: 相對路徑的參照物為terminal執行的工作目錄，而不是此程式所在目錄
// fs.writeFileSync("./index.html", "<h1>Hello World</h1>");

//解決方法: 絕對路徑，利用__dirame全局變數: 代表所在文件的所在目錄的絕對路徑
console.log(__dirname);
fs.writeFileSync(__dirname + "/資料/index.html", "<h1>Hello World</h1>");