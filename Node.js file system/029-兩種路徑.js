const fs = require('fs');

//相對路徑
//fs.writeFileSync("./資料/index.html", "<h1>Hello World</h1>");
//fs.writeFileSync("資料/index.html", "<h1>Hello World</h1>");    //跟第一個都是當前目錄創建檔案
//fs.writeFileSync("../index.html", "<h1>Hello World</h1>");

//絕對路徑
//fs.writeFileSync("D:/index.html", "<h1>Hello World</h1>");
//fs.writeFileSync("C:/index.html", "<h1>Hello World</h1>");  //無法在C槽創建，權限會不足
fs.writeFileSync("/index.html", "<h1>Hello World</h1>");    //在根目錄下創建(也就是D槽)