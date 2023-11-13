var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 導入index(account)路由文件
var indexRouter = require('./routes/web/index');
// 導入account接口路由文件
const accountRouter = require('./routes/api/account');
// 導入login註冊路由文件
const loginRouter = require('./routes/web/verify');
// 導入login接口路由文件
const loginApiRouter = require('./routes/api/verify');
// 導入express-session connect-mongo
const session = require('express-session');
const MongoStore = require('connect-mongo');
// 導入配置項
const {DBHOST, DBPORT, DBNAME} = require('./config/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 設置全局中介函數

// 設置sessin全局中介函數
app.use(session({
  name: 'sid',    // 設置響應cookie的名字，默認值是: connect.sid
  secret: 'atguigu',  // 設置private key對cookie做加密(對稱式加密: 加解密鑰匙都一樣)
  saveUninitialized: false,   // 若客戶沒有用session，是否每次請求還要在伺服器端設置一個session對象(通常是需要紀錄匿名對象時才會需要)
  resave: true,   // 是否每次請求時，重新保存session，因為session會有生命週期
  store: MongoStore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`  // 數據庫的連接配置
  }),
  cookie: {   // 返回cookie的內容
      httpOnly: true, // 讓前端無法透過JS的document.coookie去存取，安全性較高
      maxAge: 1000 * 60 * 60 * 24 * 7   // 可以控制cookie和sessionID的生命週期(單位毫秒)
  }
}));
//因為會用到session中介函數，所以要定義在其之後
app.use('/', loginRouter);  
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', accountRouter);
app.use('/api/', loginApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 響應404頁面
  res.render('error/404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('option/error');
});

module.exports = app;
