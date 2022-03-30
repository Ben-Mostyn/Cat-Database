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
// await Cat.deleteOne({name: 'HelloKitty'});



//! Update Methods

//! The below line works
// await Cat.findOne({ name: 'Macey'}).updateOne({name: 'Zelinski'});



//  await Cat.findOneAndUpdate({name: 'Kurt'}, {name: 'Macey'}, (error, data) => {
    
//     if(error){
//         console.log(error)
//     } else{
//         console.log(data)
//     }
//  })

 

// async function Update () {
// let update = await Cat.findOne({ name: 'Kurt'}).update({name: 'Kurt'});




// }

// await Cat.findOneAndUpdate()


//! List

// return await Cat.find({});


//Find a specific element by ID
// const foundCat = await Cat.findById('624436c6f9f0c11e47895baf');
// console.log(foundCat);

// Terminates connection, which allows you to type again in the terminal.
mongoose.connection.close();
})();