const jwt = require("jsonwebtoken")

const secrets = require("../config/secrets")

module.exports = (req,res,next) =>{
    const token = req.headers.authorization;

    jwt.verify(token,secrets.jwtSecret, (err, decodeToken)=>{
        if(err){
            res.status(401).json({errorMessage: "access denied"})
        }else{
            req.decodeToken = decodeToken
            next();
        }
    })
}