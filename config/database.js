//MongoDB package meghívása
const mongoose = require('mongoose');
//index.js elérés
const config = require('./index.js');

//hozzá csatlakoztassuk a mongoDBhez 
const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true})
    .then(() => console.log('Adatbázishoz csatlakozva'));
