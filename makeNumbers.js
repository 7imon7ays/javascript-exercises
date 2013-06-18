var fs = require('fs');

(function(){
	fs.writeFile('./numbers.txt', makeNumbers(), function(){
		console.log('write successful');
	});
})();
console.log('hi');

function makeNumbers(){
  var string = '';
  for (var i = 1; i < 101; i ++) {
    string += (i + '\n')
  }
	console.log('string has been written');
	return string;
};