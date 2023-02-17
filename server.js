const PORT = 3000
const HOST = "localhost"
const express = require("express")
const app = express()
//const expbs = require('express-handlebars')
//const path = require('path')
//const routes = require('./routes/handlers')
let fs = require('fs')

app.set('views', __dirname);
app.set("view engine", "hbs");
app.use(express.static('./'));
//app.use(express.static('src/views'));

//app.get("*", (require, response) => {
//    console.log(require.url)
//    response.redirect(request.url)
//})

app.get("/", (require, response) => {
    response.redirect("/index")
} )

app.get("/index(.html?)?", (request, response) => {
    let labs_P = []
    fs.readdirSync(__dirname).forEach(file => {
        if(file.toLowerCase().includes('lab'))
        labs_P.push(file.toLowerCase());
    })
    console.log(labs_P)
    response.render("index.hbs", {
        labs: labs_P
    })

})

app.listen(PORT, HOST, ()=>{console.log(`Server started on ${HOST}:${PORT}`)});