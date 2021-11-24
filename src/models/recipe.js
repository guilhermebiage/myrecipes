const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    portion: { type: Number, default: 1 },
    instructions: { type: String, required: true },
    ingredients: [{
        ingredient: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
        quantity: {type: Number, required: false},
    }]
})
mongoose.model('recipes', schema)

module.exports = mongoose.model('recipes')