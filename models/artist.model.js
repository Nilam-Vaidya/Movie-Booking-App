const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: String,
    dob: Date,
    country: String,
    // Other fields as needed
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
