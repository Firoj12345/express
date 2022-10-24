const express=require('express');
const app= express();
app.get('/',(req,resp)=>{
    resp.send('welcome to home page')
})
app.get('/user',(req,resp)=>{
    resp.send('welcome to user page')
})
app.listen(5000);