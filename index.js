require("dotenv").config();
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");

//! This is how you Import the model
const Movie = require('./models/Movie.js');
const add = require('./utils/add');
const find  = require("./utils/find");
const remove = require('./utils/delete');


(async () => {

//Sets up a connection with database
mongoose.connect(process.env.MONGO_URI);

// ! how to add a MOVIE object
  // npm start --add --title --actor --year --genre --rating --director 
//! Adding Movie

if(argv.add) {
  await add(argv);
}

//! node index.js --find --fineOne --key "Chosen key" --value "existing property "
else if(argv.find){
  await find(argv);       
} 
//! node index.js --remove --removeOne --key "Chosen key" --value "property you want to delete"
//! switch out --removeOne for --removeMany to delete all items containing the same props

    else if (argv.remove) {
        await remove(argv, argv.title);
} 
//! node index.js --updateOne --title "existing title" --updatedTitle "New Title Name"
    else if (argv.updateOne) {
        const updateMovie = await Movie.findOne({ title: argv.title }).updateOne({title: argv.updatedTitle});
            console.log(`${argv.title} has been updated to ${argv.updatedTitle}`);
  }
  
  //! node index.js --list
  else if(argv.list){
      const listedMovies = await Movie.find({ Movie })
      console.log({ listedMovies });
  }

mongoose.connection.close();
})();
