//Immediate Invocation pattern
(function (){
if (typeof Object.beget != 'function') {

Object.beget = function (o) {
  console.log(o);
    var F = new Function();
    F.prototype = o;
    console.log(new F());
    
    return new F();
  }
  
  
}}());


var myMammel = {
  name: "Herb the mammel",
  get_Name: function () {
    return this.name;
  },
  says: function () {
    return this.saying || "";
  }
};


var myCat = Object.beget(myMammel);
myCat.name = "Herietta";
myCat.saying = 'meow';
myCat.purr = function (n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};
myCat.get_Name=function() {
  return this.says()+' '+this.name+' '+this.says(); 
};
