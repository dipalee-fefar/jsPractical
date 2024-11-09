const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('image folder'));
app.get('/',(req,res)=>{
    res.send('static middleware');
});

const port =4000;
app.listen(port,()=>{
    console.log('server runnig at http://localhost:4000/');
})
