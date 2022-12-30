const User = require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup = async (req,res)=>{
    const passwordToString = req.body.password.toString()
    const password = await  bcrypt.hash(passwordToString,saltRounds)
    const data ={...req.body,password}
    const user = await User.create(data)
    res.json({user})
}