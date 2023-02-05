const passport = require('passport'); // exporto passport
const LocalStrategy = require('passport-local').Strategy; // exporto passport strategy
const User = require('../models/user') // requiero el modelo de user y lo guardo en User 

passport.serializeUser((user,done) => { // serializar
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => { // deserializar
    const user = await User.findById(id); // buscamos el id en la base de datos
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email', // toma el email
    passwordField:'password', // toma la contraseña
    passReqToCallback: true 
}, async(req, email, password, done) => {

    const user = User.findOne({emai: email }) // busca un mail en la base de datos con el que estoy ingresando
    if(user) {
        return done(null,false, ) // requerimos conect-flast
    }

    const newUser = new User(); // usuario objeto en blanco 
    newUser.email = email; // toma el email
    newUser.password = newUser.encryptPassword(password); // toma la contraseña, la cifra y espues la retorna
    await newUser.save(); // guardo el nuevo usuario 
    done(null, newUser);
}));