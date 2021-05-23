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
const postRouter = require('./routes/post');



//require, result, next
const cors = (req, res, next) => {
        res.header('Acces-Control-Allow-Origin', '*');
        res.header('Acces-Control-Allow-Methods', '*');
        res.header('Acces-Control-Allow-Headers', '*');
        next();
};


app.use(express.urlencoded({limit: '50mb',extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(cors);


//---ROUTES
//User
app.use('/user', userRouter);

//Post
app.use('/post', postRouter);


//app beindítása
app.listen(
        config.port,
        console.log('A Szerver elindult a https://localhost:%s',config.port)
        );

