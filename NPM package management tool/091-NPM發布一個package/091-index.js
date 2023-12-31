// 將自己開發的工具包發佈到 npm 服務上，方便自己和其他開發者使用，操作步驟如下：
// 1. 建立資料夾，並建立檔案 index.js (package.json 中 main 屬性所對應的對象)， 在檔案中宣告函數，使用 module.exports 暴露
// 2. npm 初始化工具包，package.json 填寫包的資訊 (包的名字是唯一的)
// 3. 註冊帳號 https://www.npmjs.com/signup
// 4. 啟動帳號 （ 一定要啟動帳號）
// 5. 修改為官方的官方鏡像 (命令列中執行 nrm use npm，先 npm i -g nrm)
// 6. 在命令列下 npm login 填寫相關使用者信息
// 7. 命令列下npm publish 提交包 (就可以透過 npm i michelin_math進行下載安裝)👌
function add(a, b) {
    return a + b;
}

//暴露
module.exports = {
    add
}