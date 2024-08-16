const express = require('express');
const app=express();
const PORT='8080';
const cors = require('cors');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(cors()); // 를 사용해야 서로 다른 도메인에서 데이터를 연결해 줄 수 있다. react, node

const todoRouter = require('./routes/todo');
app.use('/api',todoRouter); //기본 주소 : localhost:8000/api

app.get('/',(req,res)=>{
    res.send('hello');
})
    app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
})