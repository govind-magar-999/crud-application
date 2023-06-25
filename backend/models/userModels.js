const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
        maxlength: [25, "Name should not be more than 25 char long"],
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
    }
});

module.exports = mongoose.model("User", userSchema);