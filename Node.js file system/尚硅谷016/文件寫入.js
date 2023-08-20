const fs = require('fs');  //導入fs模塊


//此為nonsychrous(非同步)，會先創建一個專門處理IO的 THREAD，來處理檔案寫入，原程式會繼續往下執行，這樣比較有效率
fs.writeFile("./座右銘.txt", "三人行，必有我師焉", err =>{
    //回調函數，err 寫入失敗: 錯誤對象，寫入成功: null
    if(err){
        console.log("寫入失敗");
        return;
    }else{
        console.log("寫入成功");
    }
});   //檔案不存在會自動創建

console.log("1 * 1");    //非同步測試，會先輸出此行

