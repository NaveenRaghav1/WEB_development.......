const express =require("express");
const app=express();
const path=require("path");
const port=80;
app.use('/static', express.static('static'))

app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'heey naveen', message:'hello there'})
});
app.get("/",(req,res)=>{
    res.send("this is my first express app with NAVEEN")
});

app.listen(port,()=>{
    console.log(`the application sstarted successfully on port ${port}`)
})