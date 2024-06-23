const express = require("express");

const LoginModel = require('../models/Loginmodel');

const router = express.Router();

router.get("/login", async function (req, res) {

    let result = await LoginModel.find({}, { "_id": 0 });
  
    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
  
  });

router.post("/login", async function (req, res) {
    var buslistObj = new LoginModel({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
  
    let newObj = await buslistObj.save();
  
    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
  });

module.exports = router;