const express = require("express");

const BookingModel = require("../models/Bookingmodel");

const router = express.Router();

router.get("/booking", async function (req, res) {

    let result = await BookingModel.find({}, { "_id": 0 });
  
    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
  
  });

  
router.post("/booking", async function (req, res) {
    var bookinglistObj = new BookingModel({
        Id: req.body.Id,
        Name: req.body.Name,
        Vehicle: req.body.Vehicle,
        Seats: req.body.Seats,
    });
  
    let newObj = await bookinglistObj.save();
  
    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
  });

  module.exports = router;