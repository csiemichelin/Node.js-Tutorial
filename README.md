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
### 註冊介面
1. WEB   
輸入帳密，點擊註冊   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/8915ce06-3fc9-4880-825c-9be5d66aa84b)
顯示註冊成功提示介面，點擊跳轉可以進入登錄介面     
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/90e6aa64-54d2-40a5-a1a1-356b2d1cd6c6)
2. MongoDB  
DB: michelin & Collections: users，產生test帳號的資訊         
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/7312ac34-559e-4ee9-9e32-54c3fd53307b)
### 登錄介面
1. 登錄成功    
輸入帳密，點擊登錄    
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/d73636ff-4f28-402c-9f65-7884f7e6bd0e)
顯示登錄成功提示介面，點擊跳轉可以進入記帳本列表       
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/4bebb1f7-803b-439a-ad0a-91986f8afa34)   
3. 登錄失敗   
輸入錯誤帳密，點擊登錄     
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/9d960066-4487-4654-8b57-de90c2b54910)   
顯示帳號密碼錯誤提示頁面   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/f45b0e5d-5cc3-4b59-9a1f-ba9c9373e68b)   
### 記帳本頁面  
1. 記帳本列表   
顯示所有記帳本列表，點擊右上角紅色退出按鈕可以回到登錄頁面，點擊藍色添加帳單按鈕，開始記帳
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/07e947dd-6c44-4075-a3ef-b20563e01fa9)  
2. 添加帳單   
(1) WEB端   
跳轉至添加紀錄的頁面，可以依序填入事項、發生時間、類型(支出/收入)、金額、備註，最後點擊添加   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/f53fb84b-caba-4027-af80-d1f77378f517)
顯示登入成功喔介面，點擊跳轉可以進入記帳本列表介面    
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/264e58ed-739f-4bc0-9069-1b330a0a3818)  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/a9f13b58-d8ad-4081-a4f6-687d772127c5)
(2) MongoDB端   
DB: michelin & Collections: accounts，產生早餐的資訊   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/5e092a8c-9789-4b32-9e26-f76dd803f185)  
3. 刪除帳單    
(1) WEB端   
進入記帳本頁面，點擊想要刪除事項的右邊紅色框的地方   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/22d8f5e9-4a44-481e-bb3b-2ab1ac440bbc)
顯示是否要刪除的提示訊息，點擊確定
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/17c7c88a-4d32-4962-b49c-bb423913566e)   
顯示成功喔介面，點擊跳轉可以進入記帳本列表介面   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/961d4ecd-71f4-4a79-91f2-6c4f92561472)  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/a5ebb28c-b61e-46b2-abd0-a619b25a37e0)  
(2) MongoDB端   
DB: michelin & Collections: accounts，早餐資訊已被刪除     
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/2b0a9efa-35fe-4029-99a2-afe3c5f111ec)

## 記帳本API端  
點開Postman，新增Global變數   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/b7ef820d-2de2-4ca5-b16c-781bc8f98789)
### 用戶的登錄  
1. 登錄成功   
response body會產生token，複製該token  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/9d01e1b4-87d9-4b8c-82cf-768dfac05bf0)
2. 登錄失敗
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/3c925888-f0ab-4e8f-bcb5-aa302aeb2d6b)
### 獲取帳單列表  
Headers記得手動添加，用戶登錄時回傳的token值  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/39be5286-fbdb-4652-8e63-a9f5162a1a99)  
### 獲取單條帳單   
1. 獲取成功   
Headers記得手動添加，用戶登錄時回傳的token值，此外URL中的id，可由獲取帳單列表的response body得出   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/dfa2b530-f7ad-4071-8ca2-a7516ad822e3)
2. 獲取失敗
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/ba32fde1-168b-4d70-ba99-f66cece43e03)  
### 創建新帳單   
Headers記得手動添加，用戶登錄時回傳的token值，此外request body填入鑰添加的值   
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/f25befa4-7b59-44ed-9ada-192859e7dd70)  
![image](https://github.com/csiemichelin/Node.js-Tutorial/assets/49907717/86557a78-e62f-48d4-b865-d6e6dd35bfbe)  
### 更新單個帳單  
### 刪除帳單  
## 網頁基本知識   
參考課程教材   

