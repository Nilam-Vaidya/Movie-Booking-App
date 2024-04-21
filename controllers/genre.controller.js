const express = require('express');
const app =express();

app.get('/findAllGenre' , (req,res) => {
    res.send('get all genres');
});