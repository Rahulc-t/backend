let express=require('express')
let app=express()
port=3000
app.use(express.json())
let bookreview=[]

const addbook=(req,res)=>{
    let{title,review}=req.body
    if(!title||!review){
        return res.status(400).json({error:"review and title"})
    }
    else{
        bookreview.push({title,review})
    }
    res.send({title,review})
}
app.post("/",addbook)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})