const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const urlencodedParser=bodyParser.urlencoded({extended:false});
var Data = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});//Логи


app.get("/main",urlencodedParser,function(request,response){
    response.sendFile(__dirname+"/main.html")
})
app.post("/data",urlencodedParser,function(request,response){
   if(!request.body) return response.sendStatus(400);
   if(request.body.userName=="user")
   {
    response.send(`Login: ${request.body.userName}`)
   }
   else if(request.body.userName=="admin")
   {
    response.sendFile(__dirname+"/dataAdmin.html")
   }
   else
   {
    response.sendFile(__dirname+"/main.html")
   }
})
app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});