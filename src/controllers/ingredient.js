const IngredientService = require('../services/ingredient')

module.exports = app => {
    
    app.get('/ingredient', (req, res) => {

        const ingredients = IngredientService.getAll()
        ingredients.then( (ingredients) => {
            res.status(201).json(ingredients)
        })

    })

    app.get('/ingredient/:id', (req, res) => {

        const ingredient = IngredientService.get(req.params.id)
        ingredient.then( (ingredient) => {
            res.status(201).json(ingredient)
        } )

    })

    app.post('/ingredient', (req,res) => {

        const ingredient = req.body
        const result = IngredientService.insert(ingredient)
        result.then((result) => {
            res.status(201).json(result)
        })
    })

    app.patch('/ingredient/:id', (req, res) => {

        const id = req.params.id
        const ingredient = req.body
        const result = IngredientService.update(id, ingredient)

        result.then((result) => {
            console.log(result)
            res.status(201).json(result)
        })
    })

    app.delete('/ingredient/:id', (req, res) => {

        const id = req.params.id
        const result = IngredientService.delete(id)

        result.then((result) => {
            res.status(201).json(result)
        })

    })

}
