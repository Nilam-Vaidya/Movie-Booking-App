const express = require('express');
const router = express.Router();

router.get('/artists', (req,res)=> {
    res.send("artists route")
});

module.exports =router;