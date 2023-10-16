// require函數導入自定義模組的基本流程
// 1. 將相對路徑轉為絕對路徑，定位目標文件
// 2. 緩存檢測
// 3. 讀取目標文件的程式
// 4. 包裹為一個函數並執行該自定義函數，可透過arguments.callee.tostring()查看自定義函數
// 5. 將模組存到緩存
// 6. 返回module.exports的值
// ******* 以下為虛擬碼(沒法執行) *******
function require(relativePath) {
    // 1. 將相對路徑轉為絕對路徑，定位目標文件
    let absolutePath = path.resolve(__dirname, relativePath);
    // 2. 緩存檢測 (若沒有才要做step:3~5)
    if (caches[absolutePath]) {
        return caches[absolutePath];
    }
    // 3. 讀取目標文件的程式
    let code = fs.readFileSync(absolutePath).toString();
    // 4. 包裹為一個函數並執行該自定義函數，可透過arguments.callee.tostring()查看自定義函數
    let module = {};
    let exports = module.exports = {};
    (function (exports, require, module, __filename, __dirname) {
        const test = {
            name: "michelin test"
        }
        
        module.exports = test;
        
        //在node.js中，此函數執行時會被包裹成一個函數執行，可以透過arguments.callee.toString()，來指向該函數並輸出
        console.log(arguments.callee.toString());
    })(exports, require, module, __filename, __dirname)    //將函數(function{})()，就可以執行
    // 5. 將模組存到緩存
    caches[absolutePath] = module.exports; 
    // 6. 返回module.exports的值
    return module.exports;
}

const m = require('./072-me.js');