// Code the routes file(s)
// app/routes/movie.routes.js (considering base URL as http://localhost:3000/api):
// GET /movies
// GET /movies?status=PUBLISHED 
// GET /movies?status=RELEASED
// GET /movies/{movieId}
// GET /movies?status=RELEASED&title={title}&genres={genres}
// &artists={artists}&start_date={startdate}&end_date={enddate}

const express=require('express');
const router=express.Router();

router.get('/movies', (req,res) => {
    const {status, title, genres, artists, start_date, end_date} = req.query;
    if(status){
        if(status === 'PUBLISHED'){
            res.send("published movie");
        } else if(status === 'RELEASED'){
            res.send("Released movie");
        } else {
            res.status(400).send("invalid movie");
        }
    } else if(title || artists || genres || start_date || end_date){
        res.send("all filtered movies");
    } else {
        res.send("all movies");
    }
});




router.get('/movies/:movieId', (req,res)=> {
    const movieId=req.params.movieId;
    res.send(`get movie by id ${movieId}`);
});


module.exports = router;