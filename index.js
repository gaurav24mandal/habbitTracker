// modules 
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = 8000 ; 
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('flash');

const app = express() ;

// const db 

const db = require('./config/mongoose');

// connect to mongo 
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB successfully!"))
//     .catch(err => console.log(err));

// EJs
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

// body parser 
app.use(express.urlencoded({ extended: false }));

//---------Express Session----------//
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
//---------Connect Flash----------//
app.use(flash());

//---------Global Variables----------//
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// routes 
app.use('/',require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(port,function(err){

    if(err){
          console.log(`Error in running the server:${err}`);
          return ;
    }
    console.log(`server is running in port:${port}`);
})