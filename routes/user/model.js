//MongoDB model létrehozása Usernek
const mongoose = require('mongoose');
const bycrpt = require('bcrypt');


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
});



//User Password Hash,Sózás
userSchema.pre('save', function(next){
    let user = this;
    
    //ha új user jön létre vagy új jelszó a BYCRPT be Hashali
    if(!user.isModified('password'))
    return next();
    bycrpt.getSalt(10, function(error, salt){
        if(error) return next(error);
        
        bycrpt.hash(user.password, salt, function(error,hash){
            if(error) return next(error);
            
            user.password = hash;
            next();
        });
    });
});

// Helyes jelszó (összehasonlítás)
userSchema.methods.comparePassword = function(canditatePassword, callback){
    bycrpt.compare(canditatePassword, this.password, function(error, isMatch){
        if(error) return callback(error);
        callback(null, isMatch);
    });
}

//maga a user sablon modell létrehozása
const userModel = mongoose.model('user', userSchema);

//importálásra alakítás
module.exports = userModel;