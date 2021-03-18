//MongoDB package meghívása
const mongoose = require('mongoose');
//index.js elérés
const config = require('./index.js');

//hozzá csatlakoztassuk a mongoDBhez 
const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Adatbázishoz csatlakozva'))
    //hiba üzenet
    .catch((error) => console.log('Hiba lépett fel',error));

//exportáljuk az adatbázist
module.exports = db;
