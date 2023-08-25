const fs = require('fs');

//// 方法一: 呼叫unlink方法，删除文件，也可以用unlinkSync
// fs.unlink("./資料/觀書有感.txt", err => {
//     if(err){
//         console.log("刪除失敗");
//         return;
//     }
//     console.log("刪除成功");
// });    

//// 方法二: 呼叫rmㄋ方法，删除文件，也可以用rmSync
fs.rm("./資料/觀書有感.txt", err => {
    if(err){
        console.log("刪除失敗");
        return;
    }
    console.log("刪除成功");
});
