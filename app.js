const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const path = require('path')

const recipeRoutes = require('./routes/recipe')

const app = express()

mongoose.connect('mongodb+srv://johnakins:JTHwWiwtX2kOZIRp@cluster0-y6qup.mongodb.net/recipes?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!')
})
.catch((error) => {
    console.log('Unable to connect to MongoDB Atlass!')
    console.error(error)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/recipes',recipeRoutes)

module.exports = app