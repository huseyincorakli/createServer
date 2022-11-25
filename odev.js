const http=require('http');
const port= 5000;
const server= http.createServer((req,res)=>{
    const url= req.url;
    if (url=='/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Index Sayfasi</h2></br>')
        res.write("Url :"+ url)
        res.end();
    }
    else if (url=='/hakkimda') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Hakkimda Sayfasi</h2></br>')
        res.write("Url :"+ url)
        res.end();
    }
    else if (url=='/iletisim') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Iletisim Sayfasi</h2></br>')
        res.write("Url :"+ url)
        res.end();
    }
    else{
        res.writeHead(400,{'Content-Type':'text/html'})
        res.write('Sayfa Bulunamadi 404</br>')
        res.write("Url :"+ url)
        res.end();
    }
})

server.listen(port,()=>{
    console.log(`${port} aktif`)
})