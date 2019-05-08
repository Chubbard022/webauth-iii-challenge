const router = require("express").Router()

const Users = require("./user-model")
const restricted = require("../auth/auth-middleware")

router.get("/",restricted,(req,res)=>{

})

module.exports = router;