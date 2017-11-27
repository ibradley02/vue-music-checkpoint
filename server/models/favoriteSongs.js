var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String },
    artist: { type: String },
    img: { type: String },
    album: { type: String },
    price: { type: Number }
})

module.exports = mongoose.model('Song', schema)