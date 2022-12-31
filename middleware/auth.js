var jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const User = require('../models/user');

const auth =async function(req,res,next){
    if(req.headers &&
         req.headers.authorization &&
         req.headers.authorization.split(" ")[1]
         ){
        const token = (req.headers.authorization.split(" ")[1]);
        try {
            const decode = await jwt.verify(token,"fake-jwt-secret")
            const user = await User.findOne({ _id: ObjectId(decode.user._id)})
            if(!user){
                res.status(401).json({error:"unauthorized user"})
                return;
            }
            next()
        } catch (error) {
            res.status(401).json({ error : "unauthorized user" })
            console.log(error)
        }
    }
}
module.exports = auth;