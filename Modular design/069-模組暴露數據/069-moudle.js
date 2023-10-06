//宣告一個函數
function Moudle1() {
    console.log("Moudle1...");
}

function Moudle2() {
    console.log("Moudle2...");
}

//暴露多個數據，方法一(主要記這個)
// module.exports = {
//     Moudle1,    //Module1: Moudle1的簡寫
//     Moudle2     //Module2: Moudle2的簡寫
// }

//暴露多個數據，方法二
// exports.Moudle1 = Moudle1;
// exports.Moudle2 = Moudle2;

//1. module.exports 可以暴露`任意`型態的數據
// module.exports = "MichelinTesr";
// module.exports = 123;

//2. 不能使用`exports = value`的形式暴露數據
//  exports = "MichelinTest";  //錯誤
// exports = module.exports = {};   //exports最後還是會呼叫module.exports
// console.log(module.exports);
// console.log(module.exports === exports);
//而069-imports.js的require函數，返回的是目標模組的module.exports的值，並不是exports的值
exports = module.exports = {};   
//exports = 521;  //所以這裡將exports設成521，module.exports的值還是為{}
exports.Moudle1 = Moudle1; //相當於module.exports = {Moudle1: Moudle1}，因此成立