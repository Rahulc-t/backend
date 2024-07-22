let express=require('express');
let app=express();
port=3000
let users=[]
app.use(express.json())
const verifier=(req,res,next)=>{
    const{email,password}=req.body;
    if(!email||!password){
        return res.status(404).json({erorr:"password and email is required"})
    }
    const emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailregex.test(email)){
        return res.status(404).json({error:"invalid email"})
    }
    next();
    
}

const register=(req,res)=>{
    const{email,password}=req.body;
    if(users.some(users=>users.email===email)){
        return res.status(404).json({error:"email already exist"})
    }
    users.push({email,password});
    res.status(200).json({message:"user registered successfully"})

}
app.post("/",verifier,register)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})