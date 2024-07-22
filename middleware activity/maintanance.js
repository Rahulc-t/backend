const express=require("express")
const app=express()
port=3000
app.use(express.json())

app.post("/maintain",(req,res)=>{
    mainrain=!mainrain
    if(mainrain){
        res.send("maintaince mode on")
    }
    else{
        res.send("maintaince mode off")
        }
})

let mainrain=false
const manitain=(req,res,next)=>{
    if(mainrain){
        return res.status(502).send("maintaince mode plaese coporate")
    }
    next();
}

app.use(manitain)

app.get("/:id",(req,res)=>{
    const id=req.params.id
    res.send(`id is ${id}`)
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})