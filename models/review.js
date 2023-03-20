const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewer: {type: String, required: true},
    stockName: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    rating: {type: Number, min: 0, default: 0}
});
module.exports = reviewSchema;

