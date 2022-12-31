const auth = function(req,res,next){
    res.status(401).json({error:"unauthorized user"})
 
}
module.exports = auth;