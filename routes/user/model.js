//MongoDB model létrehozása Usernek
const mongoose = require('mongoose');


//User Séma object létrehozása
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    account_created: {
        type: String,
        default: Date.now()
    }
})