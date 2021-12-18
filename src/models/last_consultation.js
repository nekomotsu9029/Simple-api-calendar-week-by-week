const mongoose = require('mongoose');
const {Schema} = mongoose;

const last_consultation = new Schema({
    initial_date: String,
    final_date: String
});

module.exports = mongoose.model('last_consultation', last_consultation);