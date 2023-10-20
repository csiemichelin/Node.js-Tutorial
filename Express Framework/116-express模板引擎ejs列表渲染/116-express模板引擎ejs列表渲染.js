const ejs = require('ejs');
const fs = require('fs');

// 西遊記
const roles = ['唐僧', '孫悟空', '豬八戒', '沙僧'];

// 原來 JS 方法
// let tag = '<ul>';

// roles.forEach(item => {
//     tag += `<li>${item}</li>`;  // 但這樣會造成 tag 與 item 偶合在一起，無法拆分成不同檔案
// })

// // 結束ul
// tag += '</ul>';

// console.log(tag);

// 使用 ejs 渲染，<% %> 放 forEach 的上下半部，<%= %> 放輸出變數
// let result = ejs.render(`<ul>
//         <% roles.forEach(item => { %>
//         <li><%= item %></li>
//         <% }) %>
//     </ul>`, {roles: roles});
let html = fs.readFileSync('./116-roles.html').toString();
let result = ejs.render(html, {roles: roles});

console.log(result);
