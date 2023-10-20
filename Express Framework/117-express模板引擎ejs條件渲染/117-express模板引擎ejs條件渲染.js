/**
 * 通過 isLogin 決定最終的輸出內容
 * true     輸出 [<span>歡迎回來</span>]
 * false    輸出 [<button>登錄</button> <button>註冊</button>]
 */
const ejs = require('ejs');
const fs = require('fs');

let isLogin = false;

// 原來的 JS
// if (isLogin) {
//     console.log(`<span>歡迎回來</span>`);
// } else {
//     console.log(`<button>登錄</button> <button>註冊</button>`);
// }

// 使用 ejs 條件渲染，if 同行傳入的變數不用再另外用<%=%>去包
let html = fs.readFileSync('./117-home.html').toString();
let result = ejs.render(html, {isLogin: isLogin})

console.log(result);

