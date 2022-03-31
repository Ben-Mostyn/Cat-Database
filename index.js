require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv));

const mongoose = require("mongoose");



(async () => {

//Sets up a connection with database
mongoose.connect(process.env.MONGO_URI);

const Movies = mongoose.model("Movie", {
    //   unique is a restraint
    Title: { type: String, unique: true },
    Actor: { type: String, unique: false },
    Year: Number,
    Genre: String,
    Rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    Director: String,
  });


//! Adding Movie
console.log(argv.Title);
  const movie = new Movies({ Title: argv.Title });



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