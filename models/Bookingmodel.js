var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookingSchema = new Schema(
    {
        Id: String,
        Name:String,
        Vehicle:String,
        Seats:String
    },
    { versionKey: false}
);

var BookingModel = mongoose.model("Booking",BookingSchema);

module.exports = BookingModel;