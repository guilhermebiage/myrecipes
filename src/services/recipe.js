const Recipe = require('../models/recipe')
const connection = require('../../config/database');
const ingredient = require('../models/ingredient');

class RecipeService{

    async getAll() {
        const recipes = await Recipe
                                .find({})
                                .populate({
                                    path: 'ingredients.ingredient',
                                    model: ingredient
                                })
                                .lean()
                                .exec()  
        return recipes;
    }

    async get(id) {
        const recipe = await Recipe
                                    .find({ _id: id })
                                    .lean()
                                    .exec()

        return recipe
    }

    async insert(recipe) {
        const result = await Recipe
                                .create(recipe, (e, result)=>{
                                    if (e){
                                        throw e
                                    }
                                    else{
                                        return result
                                    }
                                })

        return result
    }

    async update(id, recipe) {
        const result = await Recipe
                                .findOneAndUpdate({ _id: id }, recipe, {new: true})
                                .lean()
                                .exec()

        return result
    }   

    async delete(id) {
        const result = await Recipe
                                .deleteOne({ _id : id })
                                .exec()

        return result
    }

    async getByName(recipeName) {
        const recipes = await Recipe
                                    .find({ name: recipeName})
                                    .lean()
                                    .exec()

        return recipes
    }

}

module.exports = new RecipeService