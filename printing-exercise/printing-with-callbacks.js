var https = require('https');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  //LINEAR VERSION
  // const response = https.get(options);
  // response.setEncoding('utf8');
  // var newData ='';
  // while(!response.on('end')){
  //   var data = response.on('data');
  //   newData += data;
  // }
  // return newData;

 https.get(options, function (response) {
    var newData = "";
    response.setEncoding('utf8');

    // We are constructing HTML that will be consumed by callback
    response.on('data', function (data) {
      newData += data;
    });

    response.on('end', function(){
      // Hey, callback, whatever you were going to do with this,
      // you can do it now.

      // Please don't tell me.
      callback(newData);
    });
 });
}


function printHTML (html) {
  console.log('Print HTML', html);
}

getHTML(requestOptions, printHTML);