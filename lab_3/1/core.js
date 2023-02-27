const express = require("express");
const app = express();
var Data = new Date();

app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});
app.use("/home(.html)?",function(request,response){
    response.redirect("/");
});
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
   });
app.get("/contact(.html)?", function(request, response){
 response.send(`<p style='color: rgb(${Math.round(Math.random()*256)},${Math.round(Math.random()*256)},${Math.round(Math.random()*256)});'>Данил</p>`);
});
app.get("/*", function(request, response){
    response.status(404).send("<p style='font-size:"+Math.round(Math.random()*5)+10+"px;'>Page not found</p>");
   });
app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});