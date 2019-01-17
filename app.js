var express=require('express');
var todo_control=require('./controller/todo_control');

var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todo_control(app); 

app.listen(3000);
console.log('You are listening to 3000');
