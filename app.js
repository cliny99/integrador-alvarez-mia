var createError = require('http-errors');
var express = require('express');
var app = express()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');



const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const dashboardRouter = require('./routes/dashboard');
const adminRouter = require('./routes/apis/productRouter');
const cartRouter = require('./routes/cart');
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(session({
  secret: 'clave-super-secreta',
  resave: false,
  saveUninitialized: false
}));

app.use(cors({
  origin: 'http://localhost:5173', // url de frontend
  credentials: true // permite enviar cookies
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/admin', dashboardRouter);
app.use('/cart', cartRouter);
//app.use('/dashboard', dashboardRouter);

// apis 
app.use('/api/products', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); 
app.listen(port,() => console.log(`http://localhost:${port}`))  

module.exports = app;
