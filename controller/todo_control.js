var bodyParser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://test:momdad123@ds141902.mlab.com:41902/todo');

var todoSchema = new mongoose.Schema({
  item:String
});

var Todo=mongoose.model('Todo',todoSchema);

var urlencoded=bodyParser.urlencoded({extended:false});

module.exports=function(app){

app.get('/todo',function(req,res){
  Todo.find({},function(err,data){
    if(err) throw err;
    res.render('todo',{todos:data});
  });
});

app.post('/todo',urlencoded,function(req,res){
  var new_todo=Todo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

app.delete('/todo/:item',function(req,res){
  Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

};
