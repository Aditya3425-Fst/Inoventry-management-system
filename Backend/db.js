const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adityakumartiwari3888:H9cVwnEQkH0UCL8V@cluster0.3tjbbfe.mongodb.net/"

const connectToMongo  = async() =>{
    try{
        mongoose.connect(mongoURI);
        console.log("connected to mongo Successfully!")
    }
    catch(error){
        console.log(error);
    }
};
module.exports = connectToMongo;