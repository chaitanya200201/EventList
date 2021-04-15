const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    flag : {
        type : Boolean,
        required: true,
        default : false
    },
})

module.exports = mongoose.model('Event', eventSchema);