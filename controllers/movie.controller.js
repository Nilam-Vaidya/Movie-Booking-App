// Code the app/controllers/movie.controller.js for following API's
// findAllMovies() - to search the movie by status.
// findOne() - to fetch all details of a movie given its id.
// findShows() - to fetch details of shows of a specific movie given its id.

const express = require('express');
const app =express();

app.get('/findAllMovies' , (req,res) => {
    res.send('search movies by status');
});

app.get('/findOne', (req,res) => {
    res.send('fetch by id');
});

app.get('/findShows', (req,res)=>{
    res.send('fetch details of show');
});