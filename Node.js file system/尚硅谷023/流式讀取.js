//流式讀取適用於處理大量數據或者數據流，使系統不需要等待所有數據都加載完畢才能開始處理，從而提高了數據處理的效率
const fs = require('fs');

const rs = fs.createReadStream('./彩虹貓-rainbow.gif');   //創建讀取流對象

//綁定daata事件
rs.on('data', (chunk) => {  //chunk(大塊)為回調函數，也就是每當讀取一小塊資料後，要採取的相對應動作
    console.log(chunk.length);  //chunk為buffer格式，65536為64KB(一般緩存大小)
    // console.log(chunk.toString());  //影片格式無法用字串型態表達
});

//當讀取流的資料被全部讀出後的end事件
rs.on('end', () => {
    console.log('讀取完成');
});
