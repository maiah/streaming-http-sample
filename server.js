var express = require('express'),
    app = express(),
    fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/book', function (req, res) {
  console.log('Streaming the book...');

  var fileStream = fs.createReadStream('sample.txt');
  fileStream.pipe(res);
});

app.listen(7000);
console.log('Listening on port 7000');