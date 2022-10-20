const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const auth = require('../../../middleware/auth');

//GET USER
router.get("/:user_id", async (req, res) => {
  try {
    const users = await user.findOne({'user_id':req.params.user_id});
    const { password, ...others } = users._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USERS
router.get("/", async (req, res) => {
  const user_id = req.query.user_id;
  try {
    let users;
    if (user_id) {
      users = await user.find({ user_id });
    } else {
        users = await user.find();
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE USER
router.put("/updateuser/:id", async(req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await user.findOneAndUpdate({'user_id':req.params.id},
      {
        $set: req.body
      },{new:true}
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
})

//DELETE USER
router.delete("/deleteuser/:id", async(req, res) => {
  try {
    const deletedUser = await user.findOneAndDelete({'user_id':req.params.id});
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;