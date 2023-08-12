const express=require("express")
const app=express();
const port=80;
app.get("/",(req,res)=>{
    res.send("this is my first express app with html")
});

app.listen(port,()=>{
    console.log(`the application sstarted successfully on port ${port}`)
})