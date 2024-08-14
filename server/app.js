const express = require('express');
const app=express();
const PORT='8080';

app.use(express.urlencoded({extended : true}));
app.use(express.json())
;

const todoRouter = require('./routes/todo');
app.use('/api',todoRouter); //기본 주소 : localhost:8000/api

app.get('/',(req,res)=>{
    res.send('hello');
})
    app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
})