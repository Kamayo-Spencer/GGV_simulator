const Transmitter = require("../models/receiverInfo");

// Get information from the database

// Add a receiver
const add = (req, res) => {
  // Validating request
  if (!req.body.latitude || !req.body.longitude || !req.body.radius) {
    res.status(400).send("This field cannot be empty");
    return;
  }

  //Adding the receiver
  const addReceiver = new Transmitter({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: req.body.radius,
  });
  addReceiver
    .save(addReceiver)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "There was an erro",
      });
    });
};

// Removing receivers one by one
const deleteTransmitter = (req, res) => {
  const lat = req.body.latitude;
  const long = req.body.longitude;
  const rad = req.body.radius;
  const param = { latitude: lat, longitude: long, radius: rad };
  Transmitter.findOneAndRemove(param)
    .then((data) => {
      if (!data) {
        res.status(404).send("receiver not found");
      } else {
        res.send("Done");
      }
    })
    .catch((err) => {
      res.status(500).send("An error occurred");
    });
};

// Retrieve all information from the database
const findTransmitters = (req, res) => {
    const receivers = Transmitter.find({});
    res.status(200).json({
        success: true,
        data: receivers,
    })
};



module.exports = { add, deleteTransmitter, findTransmitters };
