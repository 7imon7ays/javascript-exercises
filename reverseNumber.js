var fs = require('fs');

var reverse = function(text){
	text = text.split('\n');
	var newText = "";
	while (text.length > 0) {
		newText += (text.pop() + "\n");
	}
	console.log("reversed the numbers")
	return newText;
};

fs.readFile('numbers.txt', 'utf8', function(err, data) {
	var text = data;
	console.log('hi');
	fs.writeFile('reversed_numbers.txt', reverse(text));
	console.log("called back");
});
console.log('when?');


