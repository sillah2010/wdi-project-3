require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const GamesController = require('./controllers/GamesController')
const SystemsController = require('./controllers/SystemsController')
const UsersController = require('./controllers/UsersController')

mongoose.Promise = global.Promise
// Create a new app using express
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})

connection.on('error', (err) => {
    console.log('MongoDB Error: ', err)
})


//Middleware
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))
app.use('/api/games', GamesController);
app.use('/api/systems', SystemsController);
app.use('/api/users', UsersController);


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App listening on port: ', PORT)
})
