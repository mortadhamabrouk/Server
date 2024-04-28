const express=require('express')
const router=express.Router()
const authmiddleware=require('../middelware/userMiddelware')
const {CreateTask,DeleteTask,GetTasks,UpdateTask}=require('../controllers/taskControllers')
const userMiddelware = require('../middelware/userMiddelware')





router.post("/post",userMiddelware,CreateTask)
router.delete("/delete/:id",userMiddelware,DeleteTask)
router.get("/get",userMiddelware,GetTasks)
router.put("/put/:id",userMiddelware,UpdateTask)












module.exports=router