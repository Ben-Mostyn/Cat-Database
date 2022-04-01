const mongoose = require("mongoose");
const Movie = require('../models/Movie');


const find = async (argv) => {
    
    if(argv.findOne){
        const foundOne = await Movie.findOne({[argv.key]: argv.value});
                console.log(`You have search for '${argv.key}: ${argv.value}' here are the results Title:${foundOne.title}, Actor: ${foundOne.actor}, Rating:${foundOne.rating}`);
        
        
    }

   
}

module.exports = find;
