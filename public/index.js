var hyperquest = require('hyperquest');

var questStream = hyperquest('http://localhost:7000/book');

var count = 0;
var delayCount = 1000;

questStream.on('data', function (data) {
  delayCount += 300;
  var info = 'THE DATA: ' + count++ + ' = ' + data.length;

  setTimeout(function () {

    document.body.appendChild(
      document.createElement('div').appendChild(
        document.createTextNode(info))
    );

    document.body.appendChild(document.createElement('br'));

  }, delayCount);
  
});