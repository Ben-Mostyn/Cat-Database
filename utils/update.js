const mongoose = require("mongoose");
const Movie = require('../models/Movie');

const updateMovie = async ( argv) => {

    try {
        if(argv.updateOne){
            const updatedMovie = await Movie.findOne({ title: argv.title }).updateOne({title: argv.updated});
            console.log(updatedMovie);
        }
    } catch (error) {
        
    }
    // const updateMovie = await Movie.findOne({ title: argv.title }).updateOne({title: argv.updatedTitle});
    //         console.log(`${argv.title} has been updated to ${argv.updatedTitle}`);
}

module.exports = updateMovie;
