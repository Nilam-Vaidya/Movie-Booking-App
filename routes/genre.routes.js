const express = require('express');
const router = express.Router();

router.get('/genres', (req,res)=> {
    res.send("genres route")
});

module.exports = router;