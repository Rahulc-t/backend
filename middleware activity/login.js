let express=require("express")
let route=express();
let port=3000;

//route.use(express.urlencoded({extended:true}))
function logger(req,res,next){
    const method=req.method
    const url=req.url
    console.log(`${method} ${url}`)
    next()
    }
route.use(logger)    
route.get("/",(req,res)=>{
    res.send("Login Page")
})
route.get("/buy",(req,res)=>{
    res.send("List of products")
})
route.post("/bill",(req,res)=>{
    res.send("here is your bill")
})
route.listen(3000,()=>{
    console.log("server is running on port 3000")
})