const mongoose = require('mongoose')
const { Schema } = require('mongoose')




const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    portion: { type: Number, default: 1 },
    instructions: { type: String, required: true },
    ingredients: [{
        ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient' }
    }]
})
mongoose.model('recipes', schema)

module.exports = mongoose.model('recipes')