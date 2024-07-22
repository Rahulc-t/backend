const express=require('express')
const app=express()
let port=3000
app.use(express.json())
app.post("/:id",(req,res)=>{
    let id=req.params.id
    let data=req.body
    //express.json(data)
    data=JSON.stringify(data.data)
    res.send(`welcome ${data} your id is ${id}`)
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})