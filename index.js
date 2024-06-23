const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors"); 

const connectDB = require('./db'); 
const LoginRouter = require("./routes/Loginroutes");
const BookingRouter = require("./routes/Bookingroutes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", LoginRouter);
app.use("/api", BookingRouter);

app.get("/", function (req, res) {
    res.send("Welcome to API");
});

connectDB().then(() => {
    var server = app.listen(3005, function () {
        console.log("Server Started. URL: http://localhost:3005");
    });
});
