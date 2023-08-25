const fs = require('fs');

//讀取程式所在文件夾
const files = fs.readdirSync("./");
// console.log(files);

//遍歷array
files.forEach(file => {
    //拆分文件名
    let data = file.split("-");
    // console.log(data);
    let [number, name] = data;
    console.log(number, name);
    //判斷式
    var tag = 0;
    Boolean(tag);
    if (Number(number) < 10 && number.length == 1) {
        number = "00" + number;
        tag = true;
    } else if (Number(number) >= 10 && Number(number) < 100 && number.length == 2) {
        number = "0" + number;
        tag = true;
    }
    if (tag) {
        //創建新的文件名
        let newName = number + "-" + name;
        // console.log(newName);
        //重命名
        fs.renameSync(`./${file}`, `./${newName}`);
    }
});