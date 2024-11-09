const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("home page");
})
app.get('/a',function(req,res){
    res.send("a page");
})
app.get('/b',function(req,res){
    res.send("b page");
})
app.get('/c',function(req,res){
    res.send("c page");
})
app.get('/d',function(req,res){
    res.send("d page");
})
app.get('/e',function(req,res){
    res.send("e page");
})
app.get('/f',function(req,res){
    res.send("f page");
})
app.get('/g',function(req,res){
    res.send("g page");
})
app.get('/h',function(req,res){
    res.send("h page");
})
app.get('/i',function(req,res){
    res.send("i page");
})
app.listen(3000,function(){
    console.log("app is listen to http://localhost:3000");
})