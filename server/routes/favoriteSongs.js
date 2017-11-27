var Songs = require('../models/favoriteSongs')
var router = require('express').Router()


router.get('/api/songs', (req, res, next)=>{
    Songs.find({})
        .then(songs =>{
            res.send(songs)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/songs/:id', (req, res, next)=>{
    Songs.findById(req.params.id)
        .then(song=>{
            res.send(song)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/songs', (req, res, next)=>{
    Songs.create(req.body)
        .then(song => {
            let response = {
                data: song,
                message: 'Successfully favorited Song!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


router.put('/api/songs/:id', (req, res, next)=>{
    var action = 'Updated Song'
    Songs.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(data)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})


router.delete('/api/songs/:id', (req, res, next)=>{
    Songs.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send({message: 'So much for that song, never liked it much anyway'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


module.exports = router