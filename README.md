# Node.js-Tutorial
這裡是自學Node.js後端技術的小小天地
## 前言
Node.js是一款開發Server後端很重要的應用程式，可以在上面跑JavaScript的程式，此專案設計一個記帳系統，具備以下功能:  
1. WEB端   
&emsp; * 記帳本基礎頁面      
&emsp; * 結合MongoDB數據庫   
&emsp; * 註冊頁面Cookie-Sesssion驗證功能   
&emsp; * 對應網域和HTTPS
3. API端    
&emsp; * 記帳本Restful API返回JSON  
&emsp; * 結合MongoDB數據庫  
&emsp; * 登錄頁面Token校驗功能       
## 環境建置
### Node.js
1. [安裝Node.js](https://nodejs.org/en)  
&emsp; * 默認安裝即可  
2. 終端機輸入node -v查看Node.js的版本  
3. 終端機輸入npm -v查看npm版本，他是用來管理Node.js的模組工具，通常安裝為Node.js就會自動幫你安裝npm      
```   
cd 專案目錄
npm init  //默認就按enter，會根據package.json設定，安裝node module   
npm install express //這裡安裝express npm模塊
code package.json//會看到dependencies多了"express": "^4.18.2"
cd node_modules  //會看到其他模塊因為express模塊也會用到其他模塊，也可觀察不同模塊的package.json
npm uninstall express  //進行卸載
```
### Node.js版本管理工具NVM
[安裝Node.js版本管理工具NVM(Node Version Manager)，來對不同版本的Node.js進行管理](https://www.youtube.com/watch?v=YJdh2E4idmY&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=8)  
&emsp; * [Linux/MacOS NVM](https://github.com/nvm-sh/nvm)    
&emsp; * [Windows NVM](https://github.com/coreybutler/nvm-windows)
```
nvm version
nvm ls //用來查看nvm中已經安裝的Node.js版本
nvm ls available  //顯示官網上所有Node.js的版本，盡量選擇LTS(Long Term Service)長期維護版本進行安裝   
nvm install 20.4.0
nvm use 20.4.0  //進行Node.js的版本切換
```
### MongoDB
下載地址: https://www.mongodb.com/try/download/community   
建議選擇zip檔，適用性更強   
配置步驟如下:   
1. 將壓縮包移動到C:\Program Files下，然後解壓縮   
2. 創建C:\data\db目錄，mongodb會將數據默認保存到這個文件夾   
3. 以mongodb中bin目錄作為工作目錄，啟動命令行  
4. 運行命令mongod啟動db server，看到最後的waiting for connections，則代表服務已經啟動   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/e4ace2c0-946e-4c4d-ab5e-e779696a894e)
5. 可另外開啟命令行測試服務端是否可行  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/144ec157-9b38-4a33-8910-909cb0afa4ed)  
### Robo 3T (MongoDB GUI 工具)  
下載地址: https://github.com/Studio3T/robomongo/releases   
### Postman   
下載地址: https://www.postman.com/   
### VSCode Extensiom
1. vscode安裝以下幾個extension     
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/72dc37c5-099b-4684-8d14-d9261af738f7)  
2. 在vscode中新增程式碼片段的設定  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/3cdb44cd-59d2-4e56-9949-72384c1ed14e)  

新增以下指令  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/600f24e1-2139-4383-896a-a04919b546f7)    　

若要多行註解可以ctrl+／    

## 記帳本WEB端   
## 記帳本API端  
## 網頁基本知識   
參考課程教材   

