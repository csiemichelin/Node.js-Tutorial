// 1. 導入uniq包
const uniq = require("uniq"); //導入的是同個文件夾下node_modules中的uniq目錄

// 2. 使用函數
let array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

const result = uniq(array);
console.log(result);