const express = require("express");
const app =  express();
const cors = require("cors")
/* var mongoclient=  require("mongodb").MongoClient */
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

/* mongoclient.connect("mongodb://localhost:27017/customer") */
mongoose.connect("mongodb+srv://sriteja:mongodb123@cluster0.c84ly.mongodb.net/customer")

app.use("/",require("./routes/noteRoute"))

app.listen(3001,function(){
    console.log("express server running on port 3001");
})