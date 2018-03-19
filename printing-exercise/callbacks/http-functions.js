module.exports = function getHTML (options, callback) {
var https = require('https');

 https.get(options, function (response) {
    var newData = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      newData += data;
    });

    response.on('end', function(){
      callback(newData);
    });
 });
}
