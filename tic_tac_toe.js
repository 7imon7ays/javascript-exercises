var TicTacToe = function(){
	var that = this;
	that.grid = [[],[],[]];

	(function(){
		that.grid.forEach(function(subArray){
			for (var i = 0; i < 3; i++) {
				subArray[i] = '_';
			}
		})
	})();

};

TicTacToe.prototype.show = function(){
	console.log(this.grid[0]);
	console.log(this.grid[1]);
	console.log(this.grid[2]);
};

TicTacToe.prototype.place = function(symbol, coordinates){
	var that = this, x = coordinates[0], y = coordinates[1];
	var validMove = function(){
		return (that.grid[x][y] === '_');
	};

	if (!validMove()) {
		console.log('invalid move!');
	} else {
		that.grid[x][y] = symbol;
	}

};

var game = new TicTacToe;

game.show();