const mongoose = require("mongoose");

const trainersSchema = new mongoose.Schema({
    name: {
        type:  String,
        required: [true, "You are required to have a trainer"],
        unique: [true, "An trainer with this name already exists"],
    },
    age: {
        type: Number,
        require: [true, "Please add an Age"],
    },
    email: {
        type: String,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please enter a valid email address",
        ],
    },
    location:{
        type: String,
        require: [true, "Please add a location"],
        maxlength: [50, "location cannot be more than 50 characters"],
    },
    ace: {
        type: String,
        require: [true, "Please add an Ace Pokemon, its typing, and level"],
        maxlength: [50, "Ace Pokemon cannot be more than 50 characters"],
    },
});

module.exports = mongoose.model("trainer", trainersSchema);