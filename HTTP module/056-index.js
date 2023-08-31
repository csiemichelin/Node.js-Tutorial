//獲取所有的td
let tds = document.querySelectorAll('td');
//遍歷每一個td且綁定事件
tds.forEach(item => {
    item.onclick = function() { //箭頭函數不能用this
        this.style.background = '#222';
    }
});