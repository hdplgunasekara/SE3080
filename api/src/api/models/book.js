const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    bookID: {
        type: String,
        required: true,
        unique: true
    },
    bkName: {
        type: String,
        required: true,
    },
    bkAuthor: {
        type: String,
        required: true,
    },
    bkCategory: {
        type: String,
        required: true,
    },
    bkPublisher: {
        type: String,
        required: true,
    },
    code:{
        type: Number,
        required:true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);