var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./mlab/mlab-config')
var cors = require('cors')

var server = express()
var port = 9001

//ROUTE VARIABLES
var favoriteSongsRoutes = require('./routes/favoriteSongs')

//MIDDLEWARE
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
// server.use(sessions)

//REGISTER ROUTES
server.use(favoriteSongsRoutes)


server.listen(port, () => {console.log('Serving on port: ', port)})