const express=require('express')
const app=express()
let port=3000
let requestArray={}
app.use(express.json())

const rateLimiter=(req,res,next)=>{
const userip=req.ip
let currenttime=Date.now()
if(!requestArray[userip]){
    requestArray[userip]=[]

}
requestArray[userip]=requestArray[userip].filter(timestamp=>currenttime-timestamp<60000)
if(requestArray[userip].length>5){
    return res.status(429).json({error:"too many requests"})
}
requestArray[userip].push(currenttime)
next()
}

app.get('/',rateLimiter,(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})