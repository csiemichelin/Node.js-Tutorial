//buffer內容為16進制，每個元素固定大小皆為1 Byte

//方法1. alloc
let buffer_1 = Buffer.alloc(10);  //buffer會歸0
console.log(buffer_1);

//方法2. allocUnsafe
let buffer_2 = Buffer.allocUnsafe(100000);  //buffer可能會包含舊的記憶體數據，但不用清0所以速度較快
console.log(buffer_2);

//方法3. from
let buffer_3 = Buffer.from("hello");    //將hello字串的每個字元轉成ASCll放到buffer中
let buffer_4 = Buffer.from([105, 108, 111, 118, 101]);  //將10進制轉成16進制存到buffer中
console.log(buffer_3);
console.log(buffer_4);