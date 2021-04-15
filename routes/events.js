const express = require('express')
const router = express.Router()
const Event = require('../models/event')

//get request at /events
router.get('/', async (req, res)=>{
    try {
        const newEvent = await Event.find()
        res.send(newEvent)
    } catch(err) {
        res.send(err)
    }
})

//post request at /events for creating events
router.post('/', async (req, res) => {
    const event = new Event({
        title : req.body.title,
        description : req.body.description
    })

    try {
        const newEvent = await event.save();
        res.json(newEvent);
    } catch (error) {
        res.send({message: error.message})
    }
})

//finding event by passing id in params
router.get('/:id', async (req, res)=>{
    try{
        const event = await Event.findById(req.params.id)
        console.log(event)
        if(event == null) return res.json({message: "cannot find event"})
        res.json(event)
    } catch (err){
        res.send(err);
    }
})

//delete rquest at /event/id
router.delete('/:id', async (req, res)=>{
    try {
        const eventIds = req.params.id.split(',');
        // eventsIds.forEach((eventId)=>{
           
        // })
        for(let i = 0; i < eventIds.length; i++){
            await Event.findByIdAndRemove(eventIds[i])
        }
        res.json({message : "events got deleted"})
    } catch (error) {
        res.send(error);
    }
})


//update request at /event
router.patch('/:id', async (req, res)=>{
    try {
        const event = await Event.findById(req.params.id)
        if(req.body.title != null){
            event.title = req.body.title
        }
        if(req.body.description != null){
            event.description = req.body.description
        }
        const e1 = await event.save();
        res.json(e1);
        
    } catch (error) {
        res.send(error);
    }
})

module.exports = router