const express=require('express')
const app=express();
const port=8007;

const database=[{id:1,name:"mayank",age:11},
    {id:2,name:"manas",age:12}]

app.use(express.json())    

//create(c)
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    };

    database.push(newuser);
    res.status(201).json(newuser);
});
//read(r)-read all
app.get('/user',(req,res)=>{
    res.json(database);

})

app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userf=database.find(u=>u.id===userid)
    if(userf){
        res.json(userf);
    }
    else{
        res.status(404).json({message:"user not found"})
    
    }
})

//update(u)

app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userindex=database.findIndex(u=>u.id===userid)
    if(userindex!=-1)
    {
        database[userindex]={...database['userindex'], ...req.body};
        res.json(database[userindex])
    }
    else{
        res.status(404).json({message:"user not found"})
    }

})
//delete(D)
app.delete('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userindex=database.findIndex(u=>u.id===userid);
    if(userindex!==-1){
        const deleteuser=database.splice(userindex,1);
        res.json(deleteuser);
    }
    else{
        res.status(404).json({message:"user not found"});
        
    }
})

app.listen(port,()=>{
    console.log(`app is run at ${port}`);
});