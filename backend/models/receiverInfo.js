const mongoose = require('mongoose');

const receiverSchema = new mongoose.Schema({
    latitude: { 
        type: Number,
        required: true},
    longitude:{ 
         type: Number,
         required: true, 
         index: true, 
         },
    radius:{
        type: Number, 
        required: true},
});
const Transmitter = mongoose.model('Transmitter', receiverSchema);
module.export = Transmitter;