//A package-k meghívása

//Express
const express = require('express');
const app = express();

//Config meghívása
const config = require('./config');
//adatbázis meghívása
const db = require('./config/database');

//app beindítása
app.listen(
        config.port,
        console.log('A Szerver elindult a https://localhost:%s',config.port)
        );