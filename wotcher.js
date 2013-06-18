var fs = require('fs');

fs.watchFile('numbers.txt', function (curr, prev) {
  console.log('the current mtime is: ' + curr.mtime);
  console.log('the previous mtime was: ' + prev.mtime);
	console.log('the previous size was: ' + prev.size);
		console.log('the new size is: ' + curr.size);
});