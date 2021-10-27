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
                                .create(ingredient, (e) => {
                                    console.log(e)
                                    return
                                })

        return result
    }

    async update(id, ingredient) {
        const result = await Ingredient
                                .updateOne({ _id: id }, ingredient, (e) => {
                                    console.log(e)
                                    return
                                })
    }   

    async delete(id) {
        const result = await Ingredient
                                .deleteOne({ _id : id }, (e) => {
                                    console.log(e)
                                    return
                                })
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