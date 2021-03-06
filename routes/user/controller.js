//User séma, model behívása

const model = require('./model');
const postModel = require('../post/model');
const jwt = require('jsonwebtoken');
const config = require('../../config')

module.exports = {
    login: (req, res) => {
        //keresse meg azt a User-t aminekmegfelelnek a beviteli adatok
        model.findOne({ email: req.body.email}, (error, user) =>{
            if(error){
                res.status(500).send({auth: false, msg: error});
                return;
            }
            //console.log(user);
            //return;
            if(!user){
                res.send({auth: false, mailError: true, msg: 'Wrong Email or Password'});
                return;
            }

            //egyezik e a jelszó egy meglévő felhasználóval?
            user.comparePassword(req.body.password,(error,isMatch) =>{
                if(error) throw error;
                if(isMatch) {
                    //Belépési tokent ad a Usernek ami 12 órán túl lejár
                    let token = jwt.sign({id: user._id}, config.secret, {expiresIn: 43200});
                    res.status(200).send({auth: true, token});
                    return;
                }else{
                    res.send({auth: false, passError: true, msg: 'Wrong Email or Password'});

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
            let token = jwt.sign({id: result._id}, config.secret, {expiresIn: 43200});
            res.status(200).send({auth: true, token: token});
        })
        .catch(error => {
            if(error.code == 11000){

                res.send({auth: false, msg: "Email already exists"});
                return
            } 
            res.send({auth: false, msg:"An Internal Server error has Occured"})
        })          
    },
    getProfile: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id;
        model.findById(user_id)
        .then(user => {
            if(!user){
                res.send({success: false, msg: "User not found!"})
            }

            postModel.find({user_id: user_id})
            .then(posts => {
                res.send({
                    success: true,
                     details: {
                         display_name: user.firstname + ' ' + user.lastname,
                         posts: posts 
                     }
                    })
            })
        })
    }
}
