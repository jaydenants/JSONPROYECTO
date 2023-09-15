const express = require('express');
const app = express();

app.use(express.json())

app.use(express.static("./public"))
app.set("view engine", "ejs");
app.set("views", "./views");

const fam = require("./data/famguy.json");


app.get('/', (req, res) => {
    res.render('main', { fam });
});

app.get('/fams/:id', (req, res) =>{
    const fams = fam.find(s => s.id == req.params.id);
    res.render('index', {fams});

}) 

app.get('/name/:name', (req, res) =>{
    const uName = req.params.name
    const name = users.find(name => name.name === uName);
    res.render('index', {name});
}) 


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found")
})