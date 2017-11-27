var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    trackId: { type: Number, required: true },
    title: { type: String },
    artist: { type: String },
    img: { type: String }
})

module.exports = mongoose.model('Song', schema)