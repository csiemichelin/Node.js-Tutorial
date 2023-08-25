const fs = require('fs');

// //呼叫rename function
// fs.rename('./資料/座右銘.txt','./資料/論語.txt', err =>{
//     if(err){
//         console.log("操作失敗");
//         return;
//     }
//     console.log("操作成功");
// });

//文件移動
fs.rename("./資料/data.txt", "./data.txt", err => {
    if(err){
        console.log("操作失敗");
        return;
    }
    console.log("操作成功");
});