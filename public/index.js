var hyperquest = require('hyperquest');

var questStream = hyperquest('/book');

var count = 0;
var delayCount = 500;

questStream.on('data', function (data) {
  delayCount += 200;
  var info = 'THE DATA: ' + count++ + ' = ' + data.length;

  setTimeout(function () {
    document.body.appendChild(
      document.createElement('div').appendChild(
        document.createTextNode(info))
    );

    document.body.appendChild(document.createElement('br'));

  }, delayCount);
  
});