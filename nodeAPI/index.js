const faculty = require('./faculty')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const parser = require('body-parser')

mongoose.connect('mongodb+srv://admin:adimin@cluster0.tiuss.mongodb.net/db_faculty')
.then(()=>{
    console.log('Successfully Connected')
})

app.get('/',async(res,req)=>{
    const faculties=await faculty.find()
    res.send(faculties)
})

app.listen(3000,()=>{
    console.log('Server is running http://localhost:3000/');
})
