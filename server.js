const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');

const { url, options } = require('./config/db.config');
//Routes
const movieRoutes=require('./routes/movie.routes');
const artistRoutes=require('./routes/artist.routes');
const genreRoutes = require('./routes/genre.routes');
const userController = require('./controllers/user.controller');

const app=express();
const port=5000;


// mongoose.connect('mongodb://localhost:27017/moviesdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
//     process.exit(1); // Exit the process if MongoDB connection fails
// });
mongoose.connect(url, options)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(cors()); // Specify CORS policy
app.use(express.json());

// Middleware to disable favicon request
app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});



app.use('/api', movieRoutes);
app.use("/api", artistRoutes);
app.use("/api", genreRoutes);

app.post('/signup', userController.signUp);
app.post('/login', userController.login);
app.post('/logout', userController.logout);



// const db = require("./app/models");
// db.mongoose.connect("mongodb://localhost:27017/moviesdb" , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

// app.get('/movies', (req,res) => {
//     res.send("All Movies Data in JSON format from Mongo DB");
// });
// app.get('/genre', (req,res) => {
//     res.send("All Genres Data in JSON format from Mongo DB");
// });

// app.get('/artist', (req,res) => {
//     res.send("All Artists Data in JSON format from Mongo DB");
// });

app.listen(port, ()=>{
  console.log(`listening on ${port}!! http://localhost:5000`);
});


