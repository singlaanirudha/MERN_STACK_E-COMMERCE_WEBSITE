const jwt= require('jsonwebtoken');
const Signup = require('../model/user_schema');


const Authenticate= async (req, res, next)=>
{
    try{

    const token= req.cookies.jwtoken;
    console.log(token);

    const verifyToken = jwt.verify(token, process.env.SECRETKEY);
    const rootUser= await Signup.findOne({_id:verifyToken._id, "tokens.token":token });

    if (!rootUser){
        throw new Error("User not Found");
    }

    req.token= token;
    req.rootUser= rootUser;
    req.userID= rootUser._id;
    next();
    }
    catch(err)
    {
        res.status(401).send("Unauthorised: no token provided");
        console.log(err);          
    }

}

module.exports= Authenticate;