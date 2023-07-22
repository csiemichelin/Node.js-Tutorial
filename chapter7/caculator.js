function add(num1, num2) {
    return num1 + num2;
}

function  subtraction(num1, num2) {
    return num1 - num2;
}

module.exports.add = add;   //輸出函數讓調用模塊時可以使用該函數
module.exports.subtraction = subtraction;

/*另外一種輸出函數的寫法
module.exports = {  //key: value
    add: add,
    subtraction: subtraction,
}
*/