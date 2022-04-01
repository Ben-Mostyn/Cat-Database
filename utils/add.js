const mongoose = require("mongoose");
const Movie = require('../models/Movie');


const add = async ({ title, actor, year, genre, rating, director }) =>{
await mongoose.connect(process.env.MONGO_URI);
    try {
        const movie = new Movie({
            title,
            actor,
            year,
            genre,
            rating,
            director,
        });
        await movie.save();
        // add findOne
        console.log(movie);
    } catch (error) {
        console.log(error);
    }
  
};

module.exports = add;
