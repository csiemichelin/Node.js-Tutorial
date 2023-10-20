const {formidable} = require("formidable"); // formidable 必須加上{}，因為 formidable 為一個對象，而不是一個函數
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 顯示網頁表單
router.get('/portrait', (req, res) => {
  res.render('portrait');
});
// 處裡文件上傳
router.post('/portrait', (req, res) => {
  // 創建表單對象
  const form = formidable({ 
    multiples: true, 
    // // 設置上傳文件的保存目錄
    uploadDir: __dirname + '/../public/images/',
    // // 保持文件附檔名
    keepExtensions: true,
  });  
  // 解析請求體，並把結果放到 fields 和 files 中
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);  // 只存一般字串，ex: text, radio, checkbox, select
    // console.log(files);   // file
    // 上傳的圖片 URL 路徑為 http://127.0.0.1:3000/images/31482cdaa86941d13f9459201.png (不是 public/image 的原因，因為有設置靜態中介函數)
    // 若請求端想要訪問該圖片，則要知道其 URL ，因此服務器端需要保存該圖片的訪問 URL 的片段部分(防止 ip 跟 port 有更動)
    // 服務器端保存 /images/31482cdaa86941d13f9459201.png
    let url = '/images/' + files.portrait[0].newFilename;  // 將來此數據保存在數據庫中

    res.send('發送成功，圖片URL: ' + url);
  });
});

module.exports = router;
