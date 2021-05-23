//MongoDB be tároljuk el a képeket
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Post Séma kialakítása
const postSchema = Schema({
    user_id:{
        type: ObjectId,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
});

//példányosítás
const model = mongoose.model('post',postSchema);

//elérés
module.exports = model;