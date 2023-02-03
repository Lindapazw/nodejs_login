const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
    const user = new User(); // usuario objeto en blanco
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}));