const mongoose = require("mongoose");
const Movie = require('../models/Movie');
require("dotenv").config();

const remove = async (argv) => {
    
    if(argv.removeOne){
        // const deleteMovie = await Movie.deleteOne({[argv.key]: argv.value});
            console.log('deleteMovie');
    } 

   
}

module.exports = remove;





