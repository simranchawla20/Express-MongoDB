var express=require('express')
var app=express()
var url="127.0.0.1"
var port=9000

var userRouter=require("./Routes/user")
app.use("/user",userRouter)



app.listen(port,url,function(){
    console.log("server has started")
})