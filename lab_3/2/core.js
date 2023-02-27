const express = require("express");
const app = express();
var Data = new Date();

app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});
app.use(express.static("c:/webProgramming/3/2"))

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});
