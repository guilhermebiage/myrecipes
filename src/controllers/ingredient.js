const IngredientService = require('../services/ingredient')

module.exports = app => {
    
    app.get('/ingredients', (req, res) => {

        const ingredients = IngredientService.getAll()

        res.status(201).json(ingredients)
    })

}
