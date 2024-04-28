
const jwt=require('jsonwebtoken')
const userMiddelware=async(req,res,next)=>{
try {
    const token=req.headers.token
    if(!token){
        res.status(400).json({msg:"you are not authorized !"})
    }
    else{
        const verifyToken=await jwt.verify(token,process.env.JWT_KEY)
        if(!verifyToken){
            res.status(400).json({msg:"you are not authorized !"})
        }
        else{
            req.body.userId=verifyToken.id
            next()
        }
    }
} catch (error) {
    res.status(500).json({"msg":"somthing went wrong",error})
}

}
module.exports=userMiddelware