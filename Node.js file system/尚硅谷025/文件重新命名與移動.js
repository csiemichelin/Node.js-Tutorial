const fs = require('fs');

// //呼叫rename function
// fs.rename('./座右銘.txt','./論語.txt', err =>{
//     if(err){
//         console.log("操作失敗");
//         return;
//     }
//     console.log("操作成功");
// });

//文件移動
fs.rename("../尚硅谷017/data.txt", "./data.txt", err => {
    if(err){
        console.log("操作失敗");
        return;
    }
    console.log("操作成功");
});