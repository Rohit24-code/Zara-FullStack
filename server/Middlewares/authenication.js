const jwt= require("jsonwebtoken")



const authenication=(req,res,next)=>{
    if(!req.headers.authorization){
        res.send("invalid user")
    }

    const token= req.headers.authorization.split(" ")[1]
    jwt.verify(token, "secret", function (err, decoded) {
        if(!err){
             req.body.userId=decoded.userId
             next()
        }
        else{
            res.status(500).send("invalid user")
        }
    });
}

module.exports={authenication}