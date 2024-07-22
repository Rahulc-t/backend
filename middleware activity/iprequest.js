const express=require('express')
const app=express()
port=3000

app.use(express.json())
let ipadd
const ipreq=(req,res,next)=>{
    res.locals.ipAddress=req.ip
    next()
}

app.get('/',ipreq,(req,res)=>{
    res.json(`ip address:${res.locals.ipAddress}`)
    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})