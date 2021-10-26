const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    descripton: String
})
mongoose.model('ingredients', schema);
module.exports = mongoose.model('ingredients');

