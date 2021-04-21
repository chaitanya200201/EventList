const express = require('express')
const router = express.Router()

var eventlist = require('../controllers/events');
const event = require('../models/event');

//get request at /events
router.get('/', (req, res, next) => {
    
    eventlist.eventListAll()
    .then(events => res.json(events))
    .catch(err => res.json(err))
});

//post request at /events for creating events
router.post('/', (req, res, next) => {
    eventlist.createEvent(req.body)
    .then(event => res.json(event))
    .catch(err => res.json({message : err.message}))
})

//finding event by passing id in params
router.get('/:id', (req, res) => {
    eventlist.getEvent(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.json(err.message))
})

//delete rquest at /event/id
router.delete('/:id', (req, res) => {
    eventlist.deleteEvent(req.params.id).then(() => res.json('event got deleted'))
});



//update request at /event
router.patch('/:id', (req, res) => {
    eventlist.updateEvent(req.params.id, req.body)
    .then(event => res.json(event))
    .catch(err => res.json(err))
})


module.exports = router