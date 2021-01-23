const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  fs.readFile('./index.html', (err, data) => {
    res.send(data);
  })
})
app.get('/about', (req, res) => {
  res.set('Content-Type', 'text/html');
  fs.readFile('./about.html', (err, data) => {
    res.send(data);
  })
})
app.get('/contact', (req, res) => {
  res.set('Content-Type', 'text/html');
  fs.readFile('./contact-me.html', (err, data) => {
    res.send(data);
  })
})
app.use((req, res) => {
  res.set('Content-Type', 'text/html');
  fs.readFile('./404.html', (err, data) => {
    res.send(data);
  })
})

app.listen(3000, () => {
  console.log('Server opened at port 3000');
})
/*
Pure NodeJS Implementation

const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true);
    let route = './index.html';
    if(parsedUrl.path !== '/'){
        route = `.${parsedUrl.path}`;
    }
    fs.readFile(route,(err,data) => {
        try{
            if(err){
                res.writeHead(200, {'Content-Type':'text/html'});
                console.log('sending 404')
                fs.readFile('./404.html',(err,errData) => {
                    res.write(errData)
                    return res.end();
                });
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            }
        }catch(error){
            return res.end();
        }
    });
}).listen(5040);
*/
