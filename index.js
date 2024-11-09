const express = require("express")
const app = express();
const port = 3000;
const path = require("path")

app.use(express.static(path.join(__dirname,"public")))
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "login.html"));
})
app.get("/pricing",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","pricing.html"))
})
app.get("/fortalent",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","for-talent.html"))
})