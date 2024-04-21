const express = require('express');
const app =express();

app.get('/findAllArtists' , (req,res) => {
    res.send('get all artist');
});

module.exports = app;