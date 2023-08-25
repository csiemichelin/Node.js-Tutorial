fs = require('fs');

fs.stat('./資料/彩虹貓-rainbow.gif', (err, files) => {
    if (err) {
        console.log("操作失敗");
        return;
    } 
    console.log(files);
    console.log(files.isFile());    //查是否為檔案
    console.log(files.isDirectory());   //查看是否為資料夾
}); //stat = status