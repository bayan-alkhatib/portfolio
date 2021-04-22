'use strict'
const express=require('express');

const server = express();

const PORT =process.env.PORT || 2500;

server.listen(PORT,()=>{
    console.log(`this is port ${PORT}`);
});

server.get('/start',(req,res)=>{
   res.send(`Hello Welcom to Heroko Deployment Port ${PORT}`);
})

