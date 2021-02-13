require('dotenv').config({ path: './config/.env' });
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();
const bodyParser = require('body-parser');
const ejsRoutes = require('./routes/ejs.routes');
const authRoutes = require('./routes/auth.routes');

// Passport Config
require('./config/passport')(passport);
require('./config/db');

// *** MIDDLEWARES *** //
// ejs
app.use(express.static('public'));
app.use('/js', express.static(`${__dirname}public/js`));
app.use('/css', express.static(`${__dirname}public/css`));
app.set('view engine', 'ejs');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// morgan
process.env.NODE_ENV === '' && app.use(morgan('dev'));

// express session
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.id = '';
  next();
});

// ! *** Routes *** ! //

app.use('/', ejsRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server connected on port : localhost:  ${PORT}`);
});
