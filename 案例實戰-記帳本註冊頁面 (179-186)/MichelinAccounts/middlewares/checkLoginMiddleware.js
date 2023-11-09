/**
 * 定義路由中介函數，全局中介函數，則定義在app.js中
 */

// 聲明中介函數，來判斷有無之前登錄過
module.exports = (req, res, next) => {
    if (!req.session.username) {  // 沒有登錄過
        return res.redirect('/login'); // 跳轉到登錄介面，重新登錄
    }
    next();
};
