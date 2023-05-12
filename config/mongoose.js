//require  libarary
const mongoose=require('mongoose');
require('dotenv').config();
//const url = 
//"mongodb+srv://gauravmandal:1234@newcontact.sk38f8m.mongodb.net/?retryWrites=true&w=majority"
//connect  to db 

const URI= process.env.mongo_url;

// mongoose.connect(`mongodb://127.0.0.1/${env.db}`);

mongoose.connect(URI, { useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
