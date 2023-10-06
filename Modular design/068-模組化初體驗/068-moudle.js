//宣告一個函數
function Moudle1() {
    console.log("Moudle1...");
}

function Moudle2() {
    console.log("Moudle2...");
}

//暴露多個數據
module.exports = {
    Moudle1,    //Module1: Moudle1的簡寫
    Moudle2     //Module2: Moudle2的簡寫
}