// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js')

// Create a schema to define the properties of the pets collection
const stocksSchema = new mongoose.Schema({
    name: String,
    ticker: String,
    price: String,
    photo: String,
    description: String,
    isFeatured: Boolean,
    // the applications array can only accept objects that match the criteria specified
    // in the applicationSchema. In other words, the applications array can only accept applications
	reviews: [reviewSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Stock', stocksSchema);

