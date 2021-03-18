//User séma, model behívása

const model = require('./model');

module.exports = {
    login: (req, res) => {
        res.status(200).send({msg: 'Login Succeded'});
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
            res.status(200).send({msg: 'Register Successful', user_id: "id"});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({msg: 'Register Failed'});
        })

        
        
    }
}
