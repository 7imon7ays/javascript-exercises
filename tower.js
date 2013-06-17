var Tower = function(){
	array1 = [], array2 = [], array3 = [];
	var game = {};
	this.initialize = function(num) {
		for (var i = 0; i < num; i++) {
			array1[i] = i;
		}
	};


};



var initialize =

var validMove = function(origin, destination) {
	origin[origin.length - 1] < destination[destination.length - 1];
}

var move = function(origin, destination) {
	if !validMove()
	destination.push(origin.pop());
}

