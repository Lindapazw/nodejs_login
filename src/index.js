const express = require('express'); // exporto express
const engine = require('ejs-mate'); // exporto ejs
const path = require('path'); // exporto path
const morgan = require('morgan'); // exporto morgan
const passport = require('passport'); // exporto passport
const session = require('express-session'); // exporto express-session
const flash = require('connect-flash'); // exporto connect-flash

// Initializations
const app = express(); // denomino a express como app 
require('./database'); // requiero base de datos 
require('./passport/local-auth'); // requiero local autenticacion

// settings
app.set('views', path.join(__dirname, 'views')); // la carpeta de vista esta dentro de src 
app.engine('ejs', engine); // utiliza el motor de plantillas ejs
app.set('view engine', 'ejs'); // establece el motor de plantillas 
app.set('port', process.env.PORT || 3000); // utiliza el puerto del sistema operativo o puerto 3000 

// middlewares
app.use(morgan('dev')); // utiliza morgan y da informacion en la terminal (por ejemplo refrescar pag). Se registra el usuario
app.use(express.urlencoded({ extended:false})); // urlencoded, sirve para recibir los datos desde el cliente
app.use(session ({ 
    secret: 'myscretsession',
    resave: false,
    saveUninitialized: false
})); // añadimos sesion 
app.use(flash());
app.use(passport.initialize()); // iniciamos passport
app.use(passport.session()); // iniciamos sesion

app.use((req, res, next) => {
    app.locals.signupMessage = req.flash('signupMessage'); // toma los mensajes si existen y los guarda en la variable 
    next();
});

// routes
app.use('/', require('./routes/index')); // express utiliza esta ruta cada vez que el usuario inicialize la app

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
