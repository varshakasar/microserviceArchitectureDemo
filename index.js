const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./middlewares/routes.js')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
  }))
  //app.use(bodyParser.json())
routes.handler(app)
app.listen(port,() => {
    console.log('app listen on port 3000')
})