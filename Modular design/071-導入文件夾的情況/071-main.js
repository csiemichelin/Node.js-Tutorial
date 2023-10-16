//如果導入的路徑是文件夾，則會首先檢測該文件夾下package.json文件中mian屬性對應的文件，如果存在則導入，如果不存在則報錯(main屬性存在，但檔案不存在)
//如果main屬性不存在，或者package.json不存在，則會導入文件夾下的index.js和index.json，如果還是沒找到就會報錯
const m = require('./module/071-app');

console.log(m);
