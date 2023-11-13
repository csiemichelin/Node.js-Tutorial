# Node.js-Tutorial
這裡是自學Node.js後端技術的小小天地
## 前言
Node.js是一款開發Server後端很重要的應用程式，可以在上面跑JavaScript的程式，此專案設計一個記帳系統，具備以下功能:  
1. WEB端   
&emsp; * 記帳本基礎頁面      
&emsp; * 結合MongoDB數據庫   
&emsp; * 註冊頁面Cookie-Sesssion驗證功能     
2. API端    
&emsp; * 記帳本Restful API返回JSON  
&emsp; * 結合MongoDB數據庫  
&emsp; * 登錄頁面Token校驗功能       
## 環境建置
1. [安裝Node.js](https://nodejs.org/en)  
&emsp; * 默認安裝即可  
2. 終端機輸入node -v查看Node.js的版本  
3. 終端機輸入npm -v查看npm版本，他是用來管理Node.js的模組工具，通常安裝為Node.js就會自動幫你安裝npm      
```   
cd 專案目錄
npm init  //默認就按enter
npm install express //這裡安裝express npm模塊
code package.json//會看到dependencies多了"express": "^4.18.2"
cd node_modules  //會看到其他模塊因為express模塊也會用到其他模塊，也可觀察不同模塊的package.json
npm uninstall express  //進行卸載
```   
4. [安裝Node.js版本管理工具NVM(Node Version Manager)，來對不同版本的Node.js進行管理](https://www.youtube.com/watch?v=YJdh2E4idmY&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=8)  
&emsp; * [Linux/MacOS NVM](https://github.com/nvm-sh/nvm)    
&emsp; * [Windows NVM](https://github.com/coreybutler/nvm-windows)
```
nvm version
nvm ls //用來查看nvm中已經安裝的Node.js版本
nvm ls available  //顯示官網上所有Node.js的版本，盡量選擇LTS(Long Term Service)長期維護版本進行安裝   
nvm install 20.4.0
nvm use 20.4.0  //進行Node.js的版本切換
```   
5. vscode安裝以下幾個extension     

![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/72dc37c5-099b-4684-8d14-d9261af738f7)  
6. 在vscode中新增程式碼片段的設定  

![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/3cdb44cd-59d2-4e56-9949-72384c1ed14e)  

新增以下指令  

![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/600f24e1-2139-4383-896a-a04919b546f7)    　

若要多行註解可以ctrl+／    
7. [安裝Fiddler](https://download.cnet.com/Fiddler/3000-2648_4-77541912.html)，它是一個用於查看和分析HTTP以及HTTPS流量的網絡調試工具，可用來窺探HTTP封包      
## 記帳本WEB端   
## 記帳本API端  
## 網頁基本知識   
參考課程教材   

