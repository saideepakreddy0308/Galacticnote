const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://deepak0308:mern0308@galacticnote.agdla.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{keepAlive:true}, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;