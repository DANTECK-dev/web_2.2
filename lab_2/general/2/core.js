
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
        const filePath="c:/webProgramming/2/general/2/"+request.url.substr(1);
        fs.access(filePath,fs.constants.R_OK,err=>{
            if(err)
            {
                response.statusCode=404;
                response.end("Error 404, not found!!!");
            }
            else
            {
                fs.createReadStream(filePath).pipe(response);
            }
        });
    }
}).listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});
