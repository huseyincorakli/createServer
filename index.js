/* http modulünü kullanarak web sunucusunu oluşturmak*/
const http= require('http');
const server= http.createServer((req,res)=>{
    const url=req.url;
    if (url=='/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Anasayfa</h1>')
        res.end();
    }
    else if (url=='/about') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hakkımızda</h1>')
    }
    else{
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('<h1>Sayfa Bulunamadı 404</h1>')
    }
});
const port='8888';
server.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
});