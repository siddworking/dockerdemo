const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
});

app.listen(8080);
console.log("server startrs  at 8080")