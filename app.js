require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const prodiRouter = require('./routes/prodi');
const pesertaRouter = require('./routes/peserta');
const paslonRouter = require('./routes/paslon');
const pemilihRouter = require('./routes/pemilih');
const pemilihanRouter = require('./routes/pemilihan');

const prodiDashboardRouter = require('./routes/admin/prodi');

const app = express();

app.use(cors());
app.use(expressLayouts);

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/prodi', prodiRouter);
app.use('/api/peserta', pesertaRouter);
app.use('/api/paslon', paslonRouter);
app.use('/api/pemilih', pemilihRouter);
app.use('/api/pemilihan', pemilihanRouter);


app.use('/prodi', prodiDashboardRouter);

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

module.exports = app;
