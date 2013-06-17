Function.prototype.myBind = function(obj, args){
	var that = this;
	return function() {
	  that.apply(obj, args);
	};
};



var Cat = function(name) {
	this.name = name;
  this.meow = function(){
    console.log("My name is " + this.name + " meow");
  }
};


  var Dog = function(name) {
		this.name = name;
    this.meow = function(){
      console.log("My name is " + this.name + " woof");
    }
};


function times(num, fun) {
  for (var i = 0; i < 10; i++) {
    // call the function
    fun(); // call is made "function-style"
  }
}

var socks = new Cat("socks");

socks.meow();

var mephistopheles = new Dog("mephistopheles");

mephistopheles.meow();

times(10, socks.meow.myBind(socks));

socks.meow.myBind(mephistopheles)();