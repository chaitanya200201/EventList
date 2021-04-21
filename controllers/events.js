const Event = require('../models/event')

module.exports.eventListAll = () => {
    // try {
    //     const newEvent = await Event.find()
    //     console.log(newEvent)
    //     res.send(newEvent)
    // } catch(err) {
    //     res.send(err)
    // }
    //const newEvent = await Event.find();
    return Event.find().lean();
}

module.exports.createEvent = async (body) => {
    const event = new Event({
        title : body.title,
        description : body.description
    })
    return event.save();
}

module.exports.getEvent = (id)=>{
    return Event.findById(id);
}

module.exports.deleteEvent = async (ids)=>{
    
    const eventIds = ids.split(',');
    for(let i = 0; i < eventIds.length; i++){
         await Event.findByIdAndRemove(eventIds[i])        
    }
    return;

}

module.exports.updateEvent = async (id, body)=>{
    
    const event = await Event.findById(id)
    if (body.title != null) {
        event.title = body.title
    }
    if (body.description != null) {
        event.description = body.description
    }
    return event.save();

}