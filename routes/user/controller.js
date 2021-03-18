//User séma, model behívása

const model = require('./model');
const jwt = require('jsonwebtoken');
const config = require('../../config')

module.exports = {
    login: (req, res) => {
        //keresse meg azt a User-t aminekmegfelelnek a beviteli adatok
        model.findOne({ email: req.body.email}, (error, user) =>{
            if(error) throw error;

            //egyezik e a jelszó egy meglévő felhasználóval?
            user.comparePassword(req.body.password,(error,isMatch) =>{
                if(error) throw error;
                if(isMatch) {
                    //Belépési tokent ad a Usernek ami 12 órán túl lejár
                    let token = jwt.sign({id: user._id}, config.secret, {expiresIn: 43200});
                    res.status(200).send({msg: 'Login Succeded', token: token});
                }else{
                    res.status(401).send({msg: 'Passwords did not match'});
                }
            });
        })      
    },
    register: (req,res) => {
        //regisztáció funkció 
        
        let newUser = new model({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });

        //beletöltjük az adatbázisba
        //promise ágon result és catch ha hiba van
        newUser.save()
        .then(result => {
            console.log(result);
            res.status(200).send({msg: 'Register Successful', user_id: result._id});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({msg: 'Register Failed'});
        })

        
        
    }
}
