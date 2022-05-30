module.exports = app =>{
    const Transmitter = require("../controllers/receiverOp.js");
    var router = require('express').Router();

    router.post("/",  Transmitter.add);
    router.delete("/:id",Transmitter.deleteTransmitter);
    router.get('/', Transmitter.findTransmitters)

    app.use('/api/tasks', router)
    

}

