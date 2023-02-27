const express = require("express");
const fs=require("fs");
const app = express();

app.use(function(request,response,next){
let now=new Date().toLocaleDateString();
let data=`${now} ${request.method} ${request.url} + ${request.get("user-agent")}`;
console.log(data);
fs.appendFile("c:/webProgramming/3/3/server.log",data+'\n',function(){});
next();
});

app.use("/home(.html)?",function(request,response,next){
    response.redirect("index.html");
    next()
});
app.use("/main(.html)?",function(request,response,next){
    response.redirect("index.html");
    next()
});
app.use("/index",function(request,response,next){
    response.redirect("index.html");
    next()
});
app.use("/index(.php)?",function(request,response,next){
    response.redirect("index.html");
    next()
});
app.use("/index.html", function(request, response,next){
    app.use(express.static("c:/webProgramming/3/3/index.html"));
    next()
});

app.get("/content/?",function(request,response){
    response.redirect("/content.html");
});
app.use("/content.html", function(request, response,next){
    app.use(express.static("c:/webProgramming/3/3/"));
    next();
});

app.get("/info/?",function(request,response){
    response.redirect("/info.html");
});

app.use("/info.html", function(request, response,next){
    app.use(express.static("c:/webProgramming/3/3/"));
    next()
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});
