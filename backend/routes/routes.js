module.exports = app =>{
    const Transmitter = require("../controllers/receiverOp.js");
    var router = require('express').Router();

    router.post("/add",  Transmitter.add);
    router.delete("/:id",Transmitter.delete);

    app.use('/api/tasks', router)
    

}

