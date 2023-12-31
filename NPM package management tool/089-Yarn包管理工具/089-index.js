// 要將node_modules中的東西，放到git會負擔很大，只需從git下載下來透過yarm，自動抓取package.json的所有依賴包即可
// 透過輸入yarn server，來測試別名
// 1. 導入uniq包
// const uniq = require("uniq"); //導入的是同個文件夾下node_modules中的uniq目錄
// const uniq = require("./node_modules/uniq"); //導入的是文件夾，所以執行的是該目錄中，package.json中的main屬性所對應的文件uniq.js
const uniq = require("./node_modules/uniq/uniq.js"); 
// 但這裡還是採用const uniq = require("uniq");，因為這裡如果在該目錄找不到uniq包，則會不斷往上層資料夾中尋找該uniq包

// 2. 使用函數
let array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

const result = uniq(array);
console.log(result);

//yarn跟npm不要混著用，由公司的yarn.lock和package-lock.json來選擇