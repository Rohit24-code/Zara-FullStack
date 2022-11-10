const { Router } = require("express");
const authRoute = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../Models/user.model");

authRoute.post("/signup", (req, res) => {
  const { name, email, password, address, locality, state } = req.body;
  try {
 bcrypt.hash(password, 6, async function (err, hash) {
   if (!err) {
     const data = new userModel({
       name,
       email,
       password: hash,
       address,
       locality,
       state
     });

     await data.save();
     res.json({ msg: "user created" });
   } else {
     res.json({msg:"some error occured"});
   }
 });
  } catch (error) {
    console.log(error);
  }
 
});

authRoute.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({email});

  if (user) {
    const hash= user.password
    const token = jwt.sign(
      {
        userId: user._id,
      },
      "secret",
      { expiresIn: "1h" }
    );

    bcrypt.compare(password, hash, function (err, result) {
       if(result===true){
        res.status(200).json({msg:"logged in",token})
       }
       else{
      res.status(201).send({msg:"invalid user"})
       }
    });
  } else {
    res.status(201).send({msg:"invalid user"});
  }
});


module.exports={authRoute}