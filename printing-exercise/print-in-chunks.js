var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

 https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk recieved and printing on a new line:', data.concat("\n"));
    });

    response.on('end', function () {
      console.log('Response stream complete.')
    });

 })

}
getAndPrintHTMLChunks();