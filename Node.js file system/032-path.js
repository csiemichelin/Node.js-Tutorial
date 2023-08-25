const fs = require('fs');
const path = require('path');

//寫入文件
// fs.writeFileSync(__dirname + '/資料/index.html', '<h1>Hello World</h1>');
// console.log(__dirname + '/資料/index.html'); //會出現路徑正反斜線不統一的情況
//用resolve解決，參數1:絕對路徑，參數2:相對路徑，合併絕對路徑與相對路徑並產出規範的路徑
// console.log(path.resolve(__dirname, './資料/index.html')); 
// console.log(path.resolve(__dirname, '資料/index.html')); 
// console.log(path.resolve(__dirname, '/資料/index.html', './test')); //這樣會錯誤，resolve會抓最後遇到的絕對路徑與後面的相對路徑去做合併

//sep輸出系統的分割符
// console.log(path.sep);  //windwos的為\，而linux為/

//parse解析路徑
// console.log(__filename);    //文件的絕對路徑
// let pathstr = "D:\\文件\\Node.js-Tutorial\\Node.js file system\\032-path.js";
// console.log(path.parse(pathstr)); 

//basename = 文件名
console.log(path.basename(__filename));

//dirname = 文件的路徑
console.log(path.dirname(__filename));

//extname = 路徑的副檔名
console.log(path.extname(__filename));