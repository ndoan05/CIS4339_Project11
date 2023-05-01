const express = require('express')
const mongoose = require('mongoose') //require mongoose library functionaility
const morgan = require('morgan') // better debugging

const cors = require('cors')
// allow using a .env file
require('dotenv').config() //require the dotenv

// creates a new instance of express application
const app = express()

// add cors header to the server
app.use(
  cors({
    origin: '*'
  })
)

// sets up mongoose for the mongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connection Success!')
  })
  .catch((err) => {
    console.error('Mongo Connection Error', err)
  })

// declare port number for the api
const PORT = process.env.PORT || 3000

// setup and access request body
app.use(express.json())
app.use(morgan('dev'))

// setup middle ware for routes
app.use('/clients', require('./routes/clients'))
app.use('/events', require('./routes/events'))
app.use('/org', require('./routes/org'))
app.use('/services', require('./routes/services'))
app.use('/users', require('./routes/users'))

// error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req)
  if (!err.statusCode) {
    err.statusCode = 500
  }
  res.status(err.statusCode).send(err.message)
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
