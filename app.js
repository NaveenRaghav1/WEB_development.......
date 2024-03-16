const express = require("express")
const path = require("path");
const app = express();
const port = 81;
app.use('/static', express.static('static'))
//set the template engine as pug
app.set('view engine', 'pug')

//set the views directorhhkhk
app.set('views', path.join(__dirname, 'views'))

//our pug demo output endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title:'hey naveen', message: 'hello there' })
});

app.get("/", (req, res) => {
    res.send("this is my HOME PAGEfirst express app with harry bhai")
});
app.get("/about", (req, res) => {
    res.send("this is my ABOUT PAGEfirst express app with harry bhai")
});

app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`)
})
