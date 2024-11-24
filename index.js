const express = require("express")
const app =  express();
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
const data = require("./data.json")




app.get("/",(req,res)=>{
    res.send("users server is running")
})

// post data
app.post("/users",(req,res)=>{
    console.log("psot")
    console.log(req.body)
    const newUser = req.body
    newUser.id= data.length + 1
    data.push(newUser)
    res.send(newUser)
})

app.get("/users",(req,res)=>{
    res.send(data)
})






app.listen(port,()=>{
    console.log(`User server is running${port}`)
})