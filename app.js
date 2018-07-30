const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const candidateRouter = require('./routes/candidates')
const electionRouter = require('./routes/elections')
const communityRouter = require('./routes/communities')
const conjunctionRouter = require('./routes/conjunction')
const adminRouter = require('./routes/admins')
const loginRouter = require('./routes/login')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',indexRouter)
app.use('/api/users',userRouter)
app.use('/api/candidates', candidateRouter)
app.use('/api/elections' , electionRouter)
app.use('/api/communities' , communityRouter)
app.use('/api/conjunctions' , conjunctionRouter)
app.use('/api/admins', adminRouter)
app.use('/api/login', loginRouter)


module.exports = app;
