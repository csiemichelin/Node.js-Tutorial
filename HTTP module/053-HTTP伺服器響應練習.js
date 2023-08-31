//目標: 搭建HTTP服務，伺服器會響應一個4行3列的表格，並且要求表格有格行換色效果，且點擊單元格能高亮顯示

const http = require('http');

//新增server監聽器去監聽有沒有客戶端發來的請求，(request = 請求封包object, response = 響應封包object)
const server = http.createServer((request, response) => {
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            td{
                padding: 20px 40px;
            }
            table tr:nth-child(odd) {   
                background-color: #aef;
            }
            table tr:nth-child(even) {
                background-color: #fcb;
            }
            table, td {
                border-collapse: collapse;
            }
        </style>
    </head>
    <body>
        <table border = "1">
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
        <script>
            //獲取所有的td
            let tds = document.querySelectorAll('td');
            //遍歷每一個td且綁定事件
            tds.forEach(item => {
                item.onclick = function() { //箭頭函數不能用this
                    this.style.background = '#222';
                }
            });
        </script>
    </body>
    </html>
    `); //``可以讓字串支援換行
});

server.listen(9000, () => { //call back函數因為沒有參數所以只有一個括號
    console.log("服務已經啟動...");
});    //arg1:伺服器port, arg2:伺服器IP, arg3:call back函數(nodejs server啟動完畢後就會呼叫這個函數，顯示服務器運行的一些信息)
//HTTP默認端口=80，HTTPS默認端口=443
//每次發HTTP請求時，都會有favicon.ico，此為顯示在瀏覽器收藏夾、地址欄和標籤標題前面的個性化圖標