const passport = require('passport'); // exporto passport
const LocalStrategy = require('passport-local').Strategy; // exporto passport strategy

const User = require('../models/user')

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser(async (user,done) => {
    const User = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField:'password',
    passReqToCallback: true
}, async(req, email, password, done) => {
    const newUser = new User(); // usuario objeto en blanco
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();
    done(null, newUser);
}));