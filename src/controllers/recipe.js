const RecipeService = require('../services/recipe')
const mongoose = require('mongoose')
require('../models/ingredient')

module.exports = (app) => {

    app.get('/recipe', (req, res) => {
        const recipes = RecipeService.getAll()
        recipes.then((result) => {
            res.status(201).json(result)
        }, (e) => {
            res.status(400).json(e)
        })
    })

    app.get('/recipe/:id', (req,res) => { 
        const id = req.params.id
        result = RecipeService.get(id)
        result.then((result) => {
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

    app.patch('/recipe/:id', (req,res) => {
        const recipe = req.body
        const id = req.params.id

        const result = RecipeService.update(id, recipe)
        result.then((result) => {
            res.status(201).json(result)
        }, (e) => {
            res.status(400).json(e)
        })
    })

    app.delete('/recipe/:id', (req, res) => {
        const id = req.params.id
        result = RecipeService.delete(id)
        result.then((result) => {
            res.status(201).json(result)
        }, (e) => {
            res.status(400).json(e)
        })
    })

}

