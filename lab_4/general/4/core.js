const express = require("express");
const hbs=require("hbs");
const app = express();
app.set("view engine","hbs");
hbs.registerPartials("c:/webProgramming/4/general/4/views/partials");

var Data = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});//Логи
hbs.registerHelper("news",function(){
    var arr=new Array("Новость 1","Новость 2","Новость 3");
    return arr[Math.floor(Math.random() * 3)];
})
app.use("/content",function(request,response){
    response.render("content");
});
app.use("/info",function(request,response){
    response.render("info");

});
app.use("/home",function(request,response){
    response.render("home");

});
app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});