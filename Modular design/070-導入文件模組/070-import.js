//導入模組
// fs模組之前學建議用絕對路徑
// 但require建議用相對路徑，不會受terminal執行的工作目錄影響
// const ImportMoudle = require('./070-moudle.js');    //不能省略./ or ../

// 可以省略副檔名
const ImportMoudle = require('./070-moudle');

// 導入JSON文件也可以有相同效果
// const ImportMichelin = require('./070-Mcihelin.json');
const ImportMichelin = require('./070-Mcihelin');   //但如果主檔名相同，副檔名不同，則js會比JSON更優先讀取
console.log(ImportMichelin);

//導入其他類型的文件會視作js文件處理
// const test = require('./070-Test');
const test = require('./070-Test.abc');
console.log(test);

//呼叫函數
ImportMoudle();