const express=require("express")
const router=express.Router()
const {GetDone,Register,Login,getUserData}=require('../controllers/userControllers')
const userMiddelware=require('../middelware/userMiddelware')


router.get("/",GetDone)
router.post('/register',Register)
router.post('/login',Login)
router.get('/userdata',userMiddelware,getUserData)





module.exports=router