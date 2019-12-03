//======================== SETUP PACKAGES ==============================//

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const configDB = require('./config/database.js');

//======================== CONFIG =============================//

//Connect to the database
mongoose.connect(configDB.url); 

//Use Passport
//require('./config.passport');

//For Express
app.use(morgan('dev')); //Logging
app.use(cookieParser()); //Cookie reader
app.use(bodyParser()); //HTML form info

app.set('view engine', 'ejs');  //templating engine - ejs

//For Passport
app.use(session({secret: 'eleventybillionistheanswer'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//======================== ROUTE LOCATION ==============================//
require('./app/routes.js')(app, passport);

//======================== LAUNCH APPLICATION ==============================//
app.listen(port);
console.log("Your app has started on PORT:  " + port);