require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const prodiRouter = require('./routes/prodi');
const pesertaRouter = require('./routes/peserta');
const paslonRouter = require('./routes/paslon');
const pemilihRouter = require('./routes/pemilih');
const pemilihanRouter = require('./routes/pemilihan');

const prodiDashboardRouter = require('./routes/admin/prodi');
const pesertaDashboardRouter = require('./routes/admin/peserta');
const pemilihDashboardRouter = require('./routes/admin/pemilih');
const paslonDashboardRouter = require('./routes/admin/paslon');
const pemilihanDashboardRouter = require('./routes/admin/pemilihan');
const dashboardDashboardRouter = require('./routes/admin/dashboard');

const session = require('express-session');
const auth = require('./middlewares/auth.js');

const app = express();

app.use(cors());
app.use(expressLayouts);

app.use(methodOverride('_method'));
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret' }))

app.use('/', indexRouter);
app.use('/api/prodi', prodiRouter);
app.use('/api/peserta', pesertaRouter);
app.use('/api/paslon', paslonRouter);
app.use('/api/pemilih', pemilihRouter);
app.use('/api/pemilihan', pemilihanRouter);


app.use('/prodi', auth.checkLogin, auth.checkStatus, prodiDashboardRouter);
app.use('/peserta', pesertaDashboardRouter);
app.use('/pemilih', auth.checkLogin, auth.checkStatus, pemilihDashboardRouter);
app.use('/paslon', auth.checkLogin, paslonDashboardRouter);
app.use('/pemilihan', auth.checkLogin, pemilihanDashboardRouter);
app.use('/dashboard', auth.checkLogin, auth.checkStatus, dashboardDashboardRouter);

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
