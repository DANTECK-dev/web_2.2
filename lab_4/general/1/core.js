const express = require("express");
const app = express();

var Data = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});//Логи

app.use("/1.html",function(request,response,next){
    app.use(express.static("c:/webProgramming/4/general/1/"));
    next()
});

app.use("/2.html",function(request,response){
    let items=request.query.item;
    var responseAnswer="<div>";
    for(let i=0;i<items.length;i++)
    {
        responseAnswer+=`<p>${items[i]}</p>`;
    }
    responseAnswer+="</div>";
    response.send(responseAnswer);
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});