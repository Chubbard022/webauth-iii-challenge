const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("../users/user-model")
const secret = require("../config/secrets")

router.post("/register",(req,res)=>{

})

router.post("/login",(req,res)=>{

})

function generateToken(user){

}

module.exports = router;