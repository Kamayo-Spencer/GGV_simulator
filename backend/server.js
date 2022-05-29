const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require("body-parser");


require("dotenv/config");
const app = express();
app.use(cors());

// console.log(process.env.MONGODB_URL)
mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})
// checking for errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("database connected successfully");
})

const home = require("../frontend/index.html")
app.get("/", (req, res) => {
    return res.sendFile("../frontend/index.html", {root: __dirname});
  });
app.listen(3001,() => {
    console.log('serve at http://localhost:3001');
})

