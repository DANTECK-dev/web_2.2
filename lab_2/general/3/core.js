
const http=require("http");
const fs=require("fs");
http.createServer(function(request,response){
    response.setHeader("Content-Type","text/html; charset=utf-8;")
    var Data = new Date();
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    if(request.url=="/")
    {
        response.statusCode=302;
        response.setHeader("Location","/index.html");
        response.end();
    }
    else
    {
        const filePath="c:/webProgramming/2/general/3/"+request.url.substr(1);
        fs.readFile(filePath,"utf8",function(error,data){
            if(error)
            {
                response.statusCode=404;
                response.end("Error 404, not found!!!");
            }
            else
            {
                
                data=data.replace("{header}",fs.readFileSync("c:/webProgramming/2/general/3/header.html", "utf8"))
                .replace("{menu}",fs.readFileSync("c:/webProgramming/2/general/3/menu.html", "utf8"))
                response.end(data);
            }
        });
    }
}).listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});
