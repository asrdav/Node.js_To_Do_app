var http=require('http');
var file=require('fs');

//var mywrite=file.createWriteStream(__dirname+'/writeme.txt');

/*myread.on('data',function(chunk){
  console.log('***')
  mywrite.write(chunk);
});*/

var server=http.createServer(function(req,res){
  console.log('Request was made'+req.url);
  //res.writeHead('200',{'Content-Type':'/text/html'});
  //var myread=file.createReadStream(__dirname+'/index.html');
  //myread.pipe(res);
  //req.end('hey ninjas shut the fuck up!!!');
  // if(req.url==='/ninjas'){}
  res.writeHead(200,{'Content-Type':'/application/json'});
  var myobj={
    name:'Abhi',
    roll:'1601cs01',
    age:29
  };
  res.end(JSON.stringify(myobj));
});

server.listen(2000,'127.0.0.1');
console.log('What the folks!!We are listening ~~~');
