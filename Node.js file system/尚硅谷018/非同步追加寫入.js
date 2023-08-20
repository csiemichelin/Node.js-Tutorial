const fs = require('fs');  //導入fs模塊

//方法一
fs.appendFile('../尚硅谷016/座右銘.txt', '，擇其善者而從之，則其不善者而改之', err =>{
    if(err){
        console.log("追加寫入失敗");
        return;
    }
    console.log("追加寫入成功");
});

//方法二
fs.writeFile("../尚硅谷016/座右銘.txt", " love love", {flag: 'a'}, err =>{
    //回調函數，err 寫入失敗: 錯誤對象，寫入成功: null
    if(err){
        console.log("追加寫入失敗");
        return;
    }else{
        console.log("追加寫入成功");
    }
});   //檔案不存在會自動創建