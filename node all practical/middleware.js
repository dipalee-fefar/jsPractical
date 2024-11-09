const express = require('express');
const app = express();

const middle=(req,res,next)=>{
    console.log("middleware is executed");
    next();
}
app.use(middle);

app.get('/',(req,res)=>{
    res.send('hello world');
});

const port =3030;
app.listen(port,()=>{
    console.log('server runnig at http://localhost:3030/');
})