const mongoose = require("mongoose");

const tastSchema = new mongoose.Schema({
    title:{ type: String , required: true},
    descreption: { type: String , required: false},
    completed: { type: Boolean , default: false}
})

 module.exports= mongoose.model("Task" , tastSchema);