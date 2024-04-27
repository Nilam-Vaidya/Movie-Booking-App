// const mongoose = require('mongoose');

module.exports={
    url: "mongodb://localhost:27017/moviesdb",
    options: {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
};



// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
