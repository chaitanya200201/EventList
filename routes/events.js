const express = require('express')
const router = express.Router()

var eventlist = require('../controllers/events');
const event = require('../models/event');

//get request at /events
router.get('/', eventlist.eventListAll);

//post request at /events for creating events
router.post('/', eventlist.createEvent)

//finding event by passing id in params
router.get('/:id', eventlist.getEvent)

//delete rquest at /event/id
router.delete('/:id', eventlist.deleteEvent);



//update request at /event
router.patch('/:id', eventlist.updateEvent)


module.exports = router