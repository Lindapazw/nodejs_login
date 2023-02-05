const express = require('express'); // require express
const router = express.Router(); // passport devuelve el objeto router

const passport = require('passport'); // require passport

router.get('/', (req, res, next) => { // ventana de inicio
    res.render('index'); // como respuesta al inicio de la app, se muestra la ventana index
});

router.get('/signup', (req, res, next) => { // ventana registrarse
    res.render('signup')
});

router.post('/signup', passport.authenticate('local-signup', { // una ves el usuario se registra, entra el post a esta ventana
    successRedirect:'/profile', // si esta ok entra a perfil
    failureRedirect: '/signup', // si no esta ok vuelve a registrarse
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => { // ventana por la que el usuario vuelve a ingresar si ya esta registrado

});

router.post('/signin', (req, res, next) => {

});

router.get('/profile', (req, res, next) => {
    res.render('profile');
});

module.exports = router