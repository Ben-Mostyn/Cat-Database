require("dotenv").config();

const mongoose = require("mongoose");



(async () => {

//Sets up a connection with database
mongoose.connect(process.env.MONGO_URI);



//Model, which is similar to an Object
const Cat = mongoose.model('Cat', {
    name: { type: String, unique: true },
    breed: String,
    age: {type: Number, min: 1, max: 100, validate: {
        validator: num => num % 2 === 0, message: props => `${props.value} is not even`
    }},
    
});


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

  const catList = await Cat.find({ Cat });
    console.log({catList});


//Find a specific element by ID
// const foundCat = await Cat.findById('624436c6f9f0c11e47895baf');
// console.log(foundCat);

// Terminates connection, which allows you to type again in the terminal.
mongoose.connection.close();
})();