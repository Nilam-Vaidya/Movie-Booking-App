const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    // Other fields as needed
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
