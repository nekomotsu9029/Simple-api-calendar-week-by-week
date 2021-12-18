const mongoose = require('mongoose');

const _url = 'mongodb://localhost:27017/calendar';

mongoose.connect(_url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(db => console.log('Database is conected :)'))
    .catch(err => console.error(err));