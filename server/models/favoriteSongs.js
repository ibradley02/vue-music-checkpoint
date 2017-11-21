var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    img: { type: String, required: true }
})

module.exports = mongoose.model('Post', schema)