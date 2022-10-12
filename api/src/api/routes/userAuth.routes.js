const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const jwt =require('jsonwebtoken');

//REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newUser = new user({
      student_id : req.body.student_id,
      name : req.body.name,
      dob : req.body.dob,
      gender : req.body.gender,
      email_address : req.body.email_address,
      address : req.body.address,
      phone_number : req.body.phone_number,
      username : req.body.username,
      password : hashedPass,
      profile_pic : req.body.profile_pic,
  });
  try {
    const stdcount = await user.count()
    newUser.user_id = 'UID00' + (parseInt(stdcount)+1)
      try {
        const user = await newUser.save()
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
      console.log(error)
    }

});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const users = await user.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, users.password);
    !validated && res.status(400).json("Wrong credentials!");

    
   
    const tokendetails= {email:user.email_address,id:user._id};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});
    
    const { password, ...others } = users._doc;

    const data ={
        user:others,
        accesstoken:accessToken
    }


    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;