const router = require("express").Router()

const Users = require("./user-model")
const restricted = require("../auth/auth-middleware")

router.get("/",restricted,(req,res)=>{
    Users.find()
        .then(users=>{
            res.json(users)
        })
        .catch(err=>{
            res.status(401).json({errorMessage: "restricted access"})
        })
})

module.exports = router;