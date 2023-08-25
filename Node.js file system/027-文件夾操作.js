const fs = require('fs');

// fs.mkdir('./資料/html', (err) => {
//     if (err) {
//         console.log("創建失敗");
//         return;
//     }
//     console.log("創建成功");
// }); //創建文件夾，mk = make，dir = directory

// fs.mkdir('./資料/test1/test2/test3', {recursive: true}, (err) => {
//     if (err) {
//         console.log("創建失敗");
//         return;
//     }
//     console.log("創建成功");
// }); //遞迴創建文件夾

// fs.readdir('./資料', (err, files) => {
//     if (err) {
//         console.log("讀取失敗");
//         return;
//     }
//     console.log(files); //文件夾的所有檔案list
// }); //讀取文件夾，files為資料夾下的檔案

// fs.rmdir('./資料/html', (err) => {
//     if(err) {
//         console.log("刪除失敗");
//         return;
//     }
//     console.log("刪除成功");
// }); //刪除文件夾，rm = remove

// fs.rmdir('./資料/test1', {recursive: true}, (err) => {
//     if(err) {
//         console.log("刪除失敗");
//         return;
//     }
//     console.log("刪除成功");
// }); //遞迴刪除文件夾，rm = remove，較不推薦使用

fs.rm('./資料/test1', {recursive: true}, (err) => {
    if(err) {
        console.log("刪除失敗");
        return;
    }
    console.log("刪除成功");
}); //遞迴刪除文件夾，rm = remove，推薦使用