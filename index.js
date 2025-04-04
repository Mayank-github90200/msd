const express=require('express');
const adi=require('./data');
const path =require('path');
const app=express();
// const adit = require('./data');
const port=8006;


// app.get('/',(req,res)=>{
//     res.send("this is my home page");
// })
// app.get('/home',(req,res)=>{
//     //res.send("this is my about page");
//     //console.log(adi)
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get('/about',(req,res)=>{
//     //res.send("this is my about page");
//     //console.log(adi)
//     res.sendFile(path.join(__dirname, "about.html"));
// });

// app.get('/contactus',(req,res)=>{
//     //res.send("this is my about page");
//     //console.log(adi)
//     res.sendFile(path.join(__dirname, "contactus.html"));
// });

app.use(express.json())
app.post('/api/abes',(req,res)=>{
    console.log("body",req.body);
    res.json({})
})

app.listen(port,()=>{
    console.log(`app is run at: ${port}`)
})