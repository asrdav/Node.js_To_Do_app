var event=require('events');
var utility=require('util');
var file=require('fs');


/*var person=function(name){
  this.name=name;
};

utility.inherits(person,event.EventEmitter);
var james=new person('james');
var mary=new person('mary');

var people=[james,mary];

people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name + ' said :' + mssg);
  });
});

james.emit('speak','asshole');
mary.emit('speak','shithead');

var read=file.readFileSync('mad.txt','utf8');
//console.log(read);
file.writeFileSync('write.txt',read);

file.mkdir('stuff',function(){
  file.readFile('mad.txt',function(err,data){
    file.writeFile('./stuff/write.txt',data);
  });
});*/

file.unlink('./stuff/write.txt',function(){
  file.rmdir('stuff');
});
