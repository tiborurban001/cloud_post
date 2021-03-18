//User séma, model behívása

const model = require('./model');

modules.export = {
    login: (req, res) => {
        res.status(200).send({msg: 'Login Succeded'});
    },
    register: (req,res) => {
        res.status(200).send({msg: 'Register Successful'});
    }
}
