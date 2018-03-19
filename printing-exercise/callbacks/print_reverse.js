var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
var rev = "";
  for (var i = html.length-1; i >=0; i--) {
    rev += html[i];
  }
var reversedText = rev.replace(/,/g, "\n");

console.log(reversedText);

}

getHTML(requestOptions, printReverse);
