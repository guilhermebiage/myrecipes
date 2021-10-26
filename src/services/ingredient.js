const Ingredient = require('../models/ingredient')
const connection = require('../../config/database')

class IngredientService{

    getAll() {
        const ingredients = Ingredient
                                .find({})
                                .lean()
                                .exec()
                                .then((results) => {
                                    console.log(results)
                                    return results
                                })

        console.log(ingredients)
    
        return ingredients;
    }
}

module.exports = new IngredientService