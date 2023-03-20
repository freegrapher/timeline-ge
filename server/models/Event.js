const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({ 
        name: {  type: String, },
        type: {  type: String, },
        Country: {  type: String,    },
        dateStart: {  type: Number,    },
        dateEnd: {  type: Number,    },
        image: {  type: String,    },
        description: {  type: String,    },
        eventId: { type: mongoose.Schema.Types.ObjectId,ref: 'Event'},
    });
module.exports = mongoose.model('Event',EventSchema);