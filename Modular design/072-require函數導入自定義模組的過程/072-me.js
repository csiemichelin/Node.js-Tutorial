const test = {
    name: "michelin test"
}

module.exports = test;

//在node.js中，此函數執行時會被包裹成一個函數執行，可以透過arguments.callee.toString()，來指向該函數並輸出
console.log(arguments.callee.toString());
console.log(test);