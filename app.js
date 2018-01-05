const express = require('express')
const app = express()
const port = 3000

// very important to do this app.get BELOW line 2, where the app was initially created
app.get('/', function(req, res) {
  console.log('hello this is the server')
  res.send('hello this is the client')
})

const listener = () => console.log(`Application listening on port ${port}!`)
app.listen(port, listener)
