const mongoose = require("mongoose");
const Movie = require('../models/Movie');


const remove = async (argv) => {
    

    try{
    if(argv.removeOne){
        const removeOne = await Movie.deleteOne({[argv.key]: argv.value});
        console.log(`You have specified the category '${argv.key}' and deleted '${argv.value}'`);
        
    } else if(argv.removeMany) {
        const removeMany = await Movie.deleteMany({[argv.key]: argv.value});
        console.log(`You have removed all instances of ${argv.value} from the database`)

    }
} catch (error){
    console.log(error);
}

   
}

module.exports = remove;





