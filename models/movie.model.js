const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: Date,
    duration: Number,
    director: String,
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    artists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    // Other fields as needed
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
