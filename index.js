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

//! node index.js --findOne --title "existing title"
else if(argv.find){
  await find(argv);
        // const foundMovie = await Movie.findOne({title: argv.title});
        //     console.log(`You have selected ${argv.title}`);
} 
//! node index.js --remove --title "Existing Title"

    else if (argv.remove) {
        await remove(argv);
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

  ///   const catList = await Cat.find({ Cat });
//     console.log({catList});
    


//Model, which is similar to an Object

//! Add a new Cat............ save() adds it to the database!
// try {
//     const cat = new Cat({
//         name: 15,
//         breed: 'sphynx',
//         age: 16
//     });
//     await cat.save();
//     console.log(cat);
    
// } catch (error) {
//     console.log(error);
// }

//!  Delete Method
// await Cat.deleteOne({name: 'Ben'});



//! Update Methods

//! The below line works
// await Cat.findOne({ name: 'Cherrelle'}).updateOne({name: 'Huuuya', age: 18});


//! Below also works but is more streamlined because you only use the one method.
//     try {
//     await Cat.updateOne({ name: "bobbie" }, { name: "bob", age: 24 });
//   } catch (error) {
//     console.log(`error name does not exist ${error}`);
//   }



//  await Cat.findOneAndUpdate({name: 'Kurt'}, {name: 'Macey'}, (error, data) => {
    
//     if(error){
//         console.log(error)
//     } else{
//         console.log(data)
//     }
//  })

 



//! List

//   const catList = await Cat.find({ Cat });
//     console.log({catList});


//Find a specific element by ID
// const foundCat = await Cat.findById('624436c6f9f0c11e47895baf');
// console.log(foundCat);

// Terminates connection, which allows you to type again in the terminal.
mongoose.connection.close();
})();