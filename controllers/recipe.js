const Recipe = require('../model/recipe')

exports.createRecipe = (req, res, next) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time:  req.body.time,
        difficulty:  req.body.difficulty
    })
    recipe.save().then(() => {
            res.status(201).json({
            message: 'Post saved successfully'
        })
    }).catch((error) => {
        res.status(400).json({
            error: error
        })
    })
}

exports.getOneRecipe = (req, res, next) => {
    Recipe.findOne({
        _id: req.params.id
    })
    .then((recipe) => {
        res.status(201).json(recipe)
    })
    .catch((error) => {
        res.status(404).json({
            error: error
        })
    })
}

exports.modifyRecipe = (req, res, next) => {
    const recipe = {
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time:  req.body.time,
        difficulty:  req.body.difficulty
    }
    Recipe.updateOne(recipe)
    .then(() => {
        res.status(201).json({
            message: req.body.title + " successfully updated"
        })        
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        })
    })
}

exports.deletRecipe = (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({
            message: "Deleted!"
        })
    })
    .catch((error) => {
        req.status(400).json({
            error: error
        })
    })
}

exports.getAllRecipes = (req, res, next) => {
    Recipe.find()
    .then((recipes) => {
        res.status(200).json(recipes)
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        })
    })
}