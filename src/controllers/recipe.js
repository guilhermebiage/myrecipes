const RecipeService = require('../services/recipe')
const mongoose = require('mongoose')
require('../models/ingredient')

module.exports = (app) => {

    app.get('/recipe', (req, res) => {
        const recipes = RecipeService.getAll()
        recipes.then((result) => {
            console.log(result[0].ingredients)
            res.status(201).json(result)
        }, (e) => {
            res.status(400).json(e)
        })
    })

    app.post('/recipe', (req,res) => {
        const recipe = req.body
        const result = RecipeService.insert(recipe)
        result.then((result) => {
            res.status(201).json(result)
        }, (e) => {
            res.status(400).json(e)
        })
    })

}

