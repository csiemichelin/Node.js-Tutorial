//buffer與字串的轉換
let buffer_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);  //將10進制轉成16進制存到buffer中
console.log(buffer_4.toString());   //將buufer轉成字串，utf-8

//buffer array元素操作
let buffer_5 = Buffer.from("hello");
console.log(buffer_5[0].toString(2));   //對字串中的第一個字元做2進制轉換，結果為:01101000(輸出最左的0可能會省略)
console.log(buffer_5);
buffer_5[0] = 95;   //將字串中的第一個字元改成10進制95
console.log(buffer_5);
console.log(buffer_5.toString());

//overflow溢位
let buffer_6 = Buffer.from("hello");
buffer_6[0] = 361;  //buffer的每個元素大小為1 Byte，故數值最多只能填到2^8 = 256，則系統會捨棄高位的數字，EX: 361 = 0001 0110 1001 =>  0110 1001 = 105(捨棄超過8位的部分)
console.log(buffer_6)

//中文
let buffer_7 = Buffer.from("你好"); //utf-8的中文每個中文字元佔據3 Byte，故buffer會有6個元素
console.log(buffer_7);