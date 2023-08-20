//流式寫入適用於大文件或是頻繁的寫入的情況，因為他不會對通道進行關閉;writeFile則適用於寫入頻率較低的情況

const fs = require('fs');  //導入fs模塊

const ws = fs.createWriteStream("./觀書有感.txt");  //創建寫入流對象

//對寫入流對象進行多次寫入
ws.write("半畝方塘一鑑開\n");
ws.write("天光雲影共徘徊\n");
ws.write("問渠哪得清如許\n");
ws.write("爲有源頭活水來\n"); 

//關閉通道
ws.close();     //程式關閉，系統會自動回收