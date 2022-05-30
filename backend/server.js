const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require("body-parser");

const path = require('path')
require("dotenv/config");

var corsOptions = {
    origin: "http://localhost:5000"
}

const app = express();
require("./routes/routes.js")(app);
app.use(cors(corsOptions));
app.use(express.json())

const dbase = require("./models/receiverInfo.js")
// console.log(process.env.MONGODB_URL)
// dbase.
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

// const home = require("../frontend/index.html")
app.get("/", (req, res) => {
    return res.sendFile(path.join(path.resolve(), "../frontend/index.html"));
  });

app.get("/add", (req, res) => {
    return res.sendFile(path.join(path.resolve(), "../frontend/add.html"));
});

app.get("/add", (req, res) => {
    return res.sendFile(path.join(path.resolve(), "../frontend/remove.html"));
});

app.listen(5000,() => {
    console.log('serve at http://localhost:5000');
})

