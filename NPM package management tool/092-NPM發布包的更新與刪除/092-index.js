// npm publish更新，要記得先去package.json去更新版本號
// npm unpublish --force 刪除

// 加法
function add(a, b) {
    return a + b;
}

// 減法
function sub(a, b) {
    return a - b;
}

//暴露
module.exports = {
    add,
    sub
}