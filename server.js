//A package-k meghívása

//Express
const { json } = require('express');
const express = require('express');
const app = express();

//Config meghívása
const config = require('./config');
//adatbázis meghívása
const db = require('./config/database');

//user route
const userRouter = require('./routes/user');



//require, result, next
const cors = (req, res, next) => {
        res.headers('Acces-Control-Allow-Origin', '*');
        res.headers('Acces-Control-Allow-Methods', '*');
        res.headers('Acces-Control-Allow-Headers', '*');
        next();
}


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);


//---ROUTES
//User
app.use('/user', userRouter);


//app beindítása
app.listen(
        config.port,
        console.log('A Szerver elindult a https://localhost:%s',config.port)
        );

