const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');

// Initializations
const app = express();
require('./database');
require('./passport/local-auth');

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false}));
app.use(passport.initialize()); // iniciamos passport
app.use(passport.session());

// routes
app.use('/', require('./routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
