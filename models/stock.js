// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the pets collection
const stockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    dateAdded: { type: Date, default: Date.now }
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('stock', stockSchema);
