const model = require("./model");
const jwt = require("jsonwebtoken");
const userModel = require("../user/model");

module.exports = {
  newpost: (req, res) => {
    let user_id = jwt.decode(req.body.auth_token).id;

    userModel.findById(user_id).then((result) => {
      if (!result) {
        res.send({ success: false, msg: "User could not be found" });
        return;
      }

      let newpost = new model({
        user_id: user_id,
        display_name: result.firstname + " " + result.lastname,
        image: req.body.image,
        desc: req.body.desc,
        timestamp: Date.now()
      });

      newpost
        .save()
        .then((result) => {
          res.send({ success: true, result: result });
        })
        .catch((err) => {
          if (err) res.send({ success: false, error: err });
        });
    });
  },
  getposts: (req, res) => {
    model.find().then((result) => {
      res.send(result);
    });
  },
};
