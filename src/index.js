const express = require('express'); // exporto express
const engine = require('ejs-mate'); // exporto ejs
const path = require('path'); // exporto path
const morgan = require('morgan'); // exporto morgan
const passport = require('passport');
const session = require('express-session');

// Initializations
const app = express(); // denomino a express como app 
require('./database');
require('./passport/local-auth');

// settings
app.set('views', path.join(__dirname, 'views')); // la carpeta de vista esta dentro de src 
app.engine('ejs', engine); // utiliza el motor de plantillas ejs
app.set('view engine', 'ejs'); // establece el motor de plantillas 
app.set('port', process.env.PORT || 3000); // utiliza el puerto del sistema operativo o puerto 3000 

// middlewares
app.use(morgan('dev')); // utiliza morgan y da informacion en la terminal (por ejemplo refrescar pag)
app.use(express.urlencoded({ extended:false}));
app.use(session ({ 
    secret: 'myscretsession',
    resave: false,
    saveUninitialized: false
})); // add sesion 
app.use(passport.initialize()); // iniciamos passport
app.use(passport.session());

// routes
app.use('/', require('./routes/index')); // express utiliza esta ruta cada vez que el usuario inicialize la app

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
