// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the pets collection
const stocksSchema = new mongoose.Schema({
    name: String,
    ticker: String,
    price: String,
    photo: String,
    description: String,
    isFeatured: Boolean
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Stock', stocksSchema);
