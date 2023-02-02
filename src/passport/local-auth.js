const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField:'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    const user = new User(); // usuario objeto en blanco
    user.email = email;
    user.password = password;
    user.save(function () { // se guarda en la base de datos

    }); 
}));