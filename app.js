var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session= require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var methodOverrride = require('method-override');


//Middlewares

var logMiddleware = require('./middlewares/logMiddleware')

// view engine setup
app.set('views','./views');
app.set('view engine', 'ejs');

app.use (logMiddleware);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(session({secret: 'secreto'}))

app.use(methodOverrride('_method'));

app.use(function(req, res, next) {// catch 404 and forward to error handler
  // next(createError(404));
  res.status(404).render('not-found')
});

// error handler
app.use(function(err, req, res, next) {  // set locals, only providing error in development

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500); // render the error page
  res.render('error');
});

app.use(express.urlencoded({ extended:false}));
app.use(express.json());


app.get('/', (req, res)=> {
  res.render('index')
});
app.get('/users/list', (req, res)=> {
  res.render('usersList')
});

app.listen(3031,()=>{
  console.log('SERVIDOR ESCUCHANDO')
})
module.exports = app;
