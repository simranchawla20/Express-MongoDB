var express=require('express')
var route=express.Router()
var {MongoClient}=require('mongodb')
var mongodburl='mongodb://localhost:27017'


route.get("/getdatafromdb",function(req,res){
    MongoClient.connect(mongodburl,function(error,cluster){
        if(error){
            res.send("error while connecting with db")
        }else{
            var dbRef=cluster.db('expressdb')
            var coll=dbRef.collection('expressdbCollection')
            coll.find().toArray(function(err,data){
                if(err)
                {
                    res.send("error while getting data")
                }
                else{
                    res.send(data)
                }
            })
        }
    })
})
route.get("/come",function(req,res){
    res.send("<h2>welcome to second route</h2>")
})


module.exports=route