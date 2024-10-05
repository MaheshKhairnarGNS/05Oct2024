//console.log("Welcome to NodeJS...");


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World... Welcome to nodejs...');
})

app.get('/mahesh', function (req, res) {
    res.send('Hello Friend... Mahesh here...');
  })

app.get('/fullStack', function (req, res) {
    res.send('Hello Friend... Welcome to fullStack...');
  })

  app.get('/newAPI', function (req, res) {
    res.send('Hello Friend... Welcome to newAPI...');
  })

  app.get('/nodemonAPI', function (req, res) {
    res.send('Hello nodemonAPI... Welcome to nodemonAPI...');
  })


app.listen(3000)