const User=require("../models/userModel")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const GetDone=(req,res)=>{
    res.send("Routing")
}

    const Register=async(req,res) =>{
        try {
            const {name,email,password}=req.body
    const existUser=await User.findOne({email:email})
    if(existUser) {
        res.status(400).json({msg:"Email already exist ,pls make sure to login !"})
    }
    else{
        const HashPW=await bcrypt.hash(password,10)
        console.log(HashPW)
    const myuser=await User.create({email,password:HashPW})
    const token=await jwt.sign({id:myuser._id},process.env.JWT_KEY,{expiresIn:"7D"})
    res.status(201).json({msg:"Register done",token})
    
    }
    }
        catch (error) {
            res.status(500).json({msg:"somthing went wrong",error})
            
        }}



        const Login=async(req,res) =>{
            try {
                const {email,password}=req.body
        const existUser=await User.findOne({email:email})
        if(!existUser) {
            res.status(400).json({msg:"Make sure to register first !"})
        }
        else{
        const verifiypassword=await bcrypt.compare(password,existUser.password)
        if (!verifiypassword){
            res.status(400).json({msg:"incorrect password ,pls try again",})
        }
        else{
            const token=await jwt.sign({id:existUser._id},process.env.JWT_KEY,{expiresIn:"7D"})
            res.status(201).json({msg:"login done",token})
        }
        
        }
        }
            catch (error) {
                res.status(500).json({msg:"somthing went wrong",error})
                
            }}

const getUserData=async(req,res)=>{
    try {
        const userData=await User.findOne({_id:req.body.userId})
        res.status(200).json({msg:"Get All User Data",userData})
      } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error})
    }
}






module.exports={GetDone,Register,Login,getUserData}