const Ingredient = require('../models/ingredient')
const connection = require('../../config/database');

class IngredientService{

    async getAll() {
        const ingredients = await Ingredient
                                .find({})
                                .lean()
                                .exec()
    
        return ingredients;
    }

    async get(id) {
        const ingredient = await Ingredient
                                    .find({ _id: id })
                                    .lean()
                                    .exec()

        return ingredient
    }

    async insert(ingredient) {
        const result = await Ingredient
                                .create(ingredient)

        return result
    }

    async update(id, ingredient) {
        const result = await Ingredient
                                .findOneAndUpdate({ _id: id }, ingredient, {new: true})
                                .lean()
                                .exec()

        return result
    }   

    async delete(id) {
        const result = await Ingredient
                                .deleteOne({ _id : id })

        return result
    }

    async getByName(ingredientName) {
        const ingredients = await Ingredient
                                    .find({ name: ingredientName})
                                    .lean()
                                    .exec()

        return ingredients
    }

}

module.exports = new IngredientService