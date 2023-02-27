const express = require("express");
const hbs=require("hbs");
const app = express();
const fs = require("fs");
const expressHbs=require("express-handlebars");
const path = require('path');
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:false});

app.engine("hbs",expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname:"hbs"
}))
app.set("view engine","hbs");
hbs.registerPartials(__dirname+"/views/partials");

var Data = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});//Логи

app.use(express.static(__dirname + 'public'));


app.use("/Dogs",function(request,response){
    response.render("Dogs");
});
app.use("/Artiodactyls",function(request,response){
    response.render("Artiodactyls");
});
app.use("/Bears",function(request,response){
    response.render("Bears");
});
app.use("/Rodents",function(request,response){
    response.render("Rodents");
});
app.use("/Main",urlencodedParser,function(request,response){
    response.render("Main");
});

app.post("/MainUserTable",urlencodedParser,function(request,response){
    if(!request.body) return response.sendStatus(400);
    else{
        var arr=JSON.parse(fs.readFileSync("userTable.txt", "utf8"));
        arr.push({name:request.body.name, description:request.body.description});
        components: arr;
        fs.writeFile("userTable.txt", JSON.stringify(arr), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
 });

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});