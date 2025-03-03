const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Hospital");

const Schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {type: String, unique: true},
    password: String,
    entryDate: Date,
})

module.exports = mongoose.model('patients', Schema);