const mongoose = require('mongoose')

const schema = mongoose.Schema({
    facultyId : Number,
    facultyName : String,
    facultyInitial : String
}, {Collection: 'faculties'});
const faculty = mongoose.model('faculty', schema);
module.exports = faculty