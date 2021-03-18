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

        
        res.status(200).send({msg: 'Register Successful'});
    }
}
