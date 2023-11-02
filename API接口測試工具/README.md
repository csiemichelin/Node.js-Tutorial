1. API: 
* 前後端通訊的橋樑，一個接口相當於一個路由規則函數 (較好理解)
* 返回數據格式為JSON
* 接口組成:
    - 請求方法 (GET/POST/...)
    - URL接口地址
    - 請求參數
    - 響應結果

2. RESTful API:
* 是一種特殊風格的API，為了方便統一減少成本
* URL中的路徑表示資源，路徑中不能有動詞，像是create, delete, update等這些都不能有
* 操作資源類型要與HTTP請求方法對應
* 操作結果要與與HTTP響應狀態碼對應

3. json-server
* 是一個JS編寫的工具包，可透過npm進行安裝，可以快速搭建RESTful API服務
$ npm i -g json-server 