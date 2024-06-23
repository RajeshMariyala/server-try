var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LoginSchema = new Schema(
    {
        email: String,
        username: String,
        password: String,
    },
    { versionKey: false}
);

var LoginModel = mongoose.model("Login",LoginSchema);

module.exports = LoginModel;