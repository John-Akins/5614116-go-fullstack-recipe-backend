const express = require('express')
const router = express.Router()

const recipeCtrl = require('../controllers/recipe')

router.post('/', recipeCtrl.createRecipe)
router.get('/:id', recipeCtrl.getOneRecipe)
router.put('/:id', recipeCtrl.modifyRecipe)
router.delete('/:id', recipeCtrl.deletRecipe)
router.get('', recipeCtrl.getAllRecipes)

module.exports = router