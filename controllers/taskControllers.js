const task=require('../models/taskmodel')


const CreateTask=async(req,res)=>{


    try {
      const {title,desc,userId }=req.body
      const newTask=await task.create({title,desc,owner:userId})  
      res.status(200).json({msg:"User Created",newTask })

    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error })
    }

}

const DeleteTask=async(req,res)=>{

    try {
        const TaskDeleted=await task.findByIdAndDelete(req.params.id)
      res.status(200).json({msg:"User Deleted",TaskDeleted })
      
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error })
    }

}
const GetTasks=async(req,res)=>{

    try {
        const Tasks=await task.find({owner:req.body.userId})
      res.status(200).json({msg:"Get ALL User Tasks",Tasks })
      
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error })
    }

}
const UpdateTask=async(req,res)=>{

    try {
        const UpdateTask=await task.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({msg:"Update User Task",UpdateTask })
      
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error })
    }

}



module.exports={CreateTask,DeleteTask,GetTasks,UpdateTask}