const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world from express');
})
app.listen(4000,()=>{
    console.log('app is listening at http://localhost:4000/');
})