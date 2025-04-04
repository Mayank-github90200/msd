const express=require('express');
const app=express();
const port=4000;
//userdefined middle ware
const adi=(req,res,next)=>{
    const age=req.query.age
    if(!age)
    {
        res.send("plz enter age")
    }
    if(age<=18)
    {
        res.send("sorry your age is under 18")
    }
    next();
}
app.use(adi)

app.get('/',(req,res)=>{
    res.send('this is my home page')
})

app.get('/about',(req,res)=>{
    res.send("this is my about page")
})

app.listen(port,()=>{
    console.log(`app is run at:${port}`)
})