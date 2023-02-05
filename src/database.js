const mongoose = require('mongoose'); // exporto mongoose
const {mongodb} = require('./keys'); // exporto desde /Keys
mongoose.set('strictQuery', true); // arregla el error de mongoose

mongoose.connect(mongodb.URI,{useNewUrlParser:true}) // accedo en keys a el objeto que cree (mongoDB.URI )
    .then(db => console.log('Database is conected')) //muestra la base de datos conectada
    .catch(err => console.error(err)); //muestra el error
