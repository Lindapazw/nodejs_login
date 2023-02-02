const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

module.exports = mongoose.model('users', userSchema);