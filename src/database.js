const mongoose = require('mongoose');
const {mongodb} = require('./keys');
mongoose.set('strictQuery', true);

mongoose.connect(mongodb.URI,{})
    .then(DB => console.log('Database is conected'))
    .catch(err => console.error(err));
