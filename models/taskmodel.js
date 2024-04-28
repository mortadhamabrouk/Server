const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true 
    },
    createAt:{
        type:Date,
        default:new Date,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})


const task=mongoose.model("tasks",taskSchema)

module.exports=task