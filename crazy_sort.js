var readline = require('readline');

var interFace = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var crazySort = function(arr) {

	var chickenWang = function(){
		interFace.question("Which is greater?\n", function(answer) {

			if (+answer === arr[0]) {
				var holder = arr[0];
				arr[0] = arr[1];
				arr[1] = holder;
			}
			console.log(arr);
			interFace.close();
			chickenWang();
		});
		console.log(arr[0]);
		console.log(arr[1]);
	}
	chickenWang();

};


crazySort([3, 2, 7, 1, 6, 5, 4, 8]);