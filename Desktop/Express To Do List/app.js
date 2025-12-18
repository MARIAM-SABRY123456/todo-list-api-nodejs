const express= require("express");
const mongoose = require("mongoose");
const taseRoutes = require("./routes/taskRoutes")
const app= express();

//middleware
app.use(express.json());

//DB connect
const url="mongodb+srv://mariam:123567@cluster0.nsj1hbe.mongodb.net/to_do_list?appName=Cluster0"
mongoose.connect(url).then(()=>{
    console.log("mongodb server started");
})

app.use(taseRoutes);
app.listen(3000 , ()=>{
    console.log("Iam listening on port 3000");
})
