// 模板引擎是分離用戶介面(HTML)和業務數據(服務端的JavaScript)的一種技術
// 但隨著前後端分離的技術，此技術越來越少人用
// EJS:是一個高效的 JavaScript 的模板引擎
// 103-express其他伺服器響應設置.js 有 sendFile 函數用來響應文件內容
// ejs主要目的是將資料嵌入HTML模板中，以便動態產生HTML內容
// express的res.sendFile函數，與ejs不同，主要用於發送靜態檔案（如圖片、CSS檔案、JavaScript檔案等）做為回應 (無法傳參數進去)

// 1. 安裝 EJS: npm i ejs (npm 安裝會自動找尋上層資料夾，裝到上層的node_module中)
// 2. 導入 EJS
const ejs = require('ejs');

// 測試字串
let taiwan = '台灣';
let str = `我愛你 ${taiwan}`;   //雖然可以這樣進行嵌入，則會偶合在一起，無法拆到不同文件

// 使用 ejs 渲染
let ejsString = '我愛你 <%= taiwan %>';
let result = ejs.render(ejsString, {taiwan: taiwan}); // <%=  %> 為 ejs 輸出表達式的語法

console.log(result);