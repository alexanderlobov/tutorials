var express = require('express')
var app = express()
// var server = require('http').createServer(app)

app.get('/', function (req, res) {
    setTimeout(function() { res.send('hello, world!') }, 1000)
})

// server.maxConnections = 2
// server.listen(3000);

app.listen(3000, function() {
    console.log('Example app on port 3000')
})
