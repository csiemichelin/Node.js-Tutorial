//宣告一個函數
function Moudle() {
    console.log("Moudle...");
}

//暴露數據
module.exports = Moudle;    //如果將module.exports設置為Moudle()，那麼實際上導出的是函數的返回值，並不是函數本身