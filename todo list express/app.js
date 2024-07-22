const express = require("express");
const path=require('path')
const app = express();
port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
app.use(express.json());
app.use(express.static(path.join(__dirname,'./public/static','index.html')))
// app.use(express.urlencoded({extended:true}))
const todoList = [];
app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname,'./public/static','index.html'))
})

app.post("/", (req, res) => {
  //const {todo}= req.body
  console.log(req.body);

  //console.log({todo})
  todoList.push(req.body.todo);
  res.send(todoList);
});
app.get("/view", (req, res) => {
  //const id = req.params.id;
  //const data = todoList;
  res.send(todoList);
});

app.put("/:id", (req, res) => {
    const id = req.params.id;
    //const data = todoList[id - 1];
    todoList[id - 1] = req.body.todo;
    res.send(todoList);
});

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    todoList.splice(id-1,1)
    res.send(todoList)
})