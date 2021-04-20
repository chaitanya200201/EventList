const Event = require('../models/event')

module.exports.eventListAll = async (req, res, next) => {
    try {
        const newEvent = await Event.find()
        console.log(newEvent)
        res.send(newEvent)
    } catch(err) {
        res.send(err)
    }
}

module.exports.createEvent = async (req, res, next) => {
    try {
        const event = new Event({
            title : req.body.title,
            description : req.body.description
        })
        console.log(event)
        const newEvent = await event.save();
        res.json(newEvent);
    } catch (error) {
        res.send({message: error.message})
    }
}

module.exports.getEvent = async (req, res, next)=>{
    try{
        const event = await Event.findById(req.params.id)
        console.log(event)
        if(event == null) return res.json({message: "cannot find event"})
        res.json(event)
    } catch (err){
        res.send(err);
    }
}

module.exports.deleteEvent = async (req, res, next)=>{
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
}

module.exports.updateEvent = async (req, res, next)=>{
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
}