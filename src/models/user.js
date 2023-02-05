const bcrypt = require('bcrypt-nodejs'); // exportamos bcrypt
const mongoose = require('mongoose'); // exportamos mongoose
const {Schema} = mongoose;


const userSchema = new Schema({ // nuevo esquema
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => { // encripta la contraseña, recive la contraseña y retorna una encriptada 
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10)); // encripta 10 veces
};

userSchema.methods.comparePassword = function (password) { // compara un password con otro
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema); // cuando los datos son guardados en la bd, se guardan en la coleccion con el nombre user