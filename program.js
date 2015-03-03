//HELLO WORLD
//console.log('HELLO WORLD');

//BABY STEPS
//console.log(process.argv);

/*var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
   sum = sum + Number(process.argv[i]);
};
console.log(sum);
*/

//MY FIRST IO
/*var fs = require('fs')
//var file = fs.readFileSync('c:/TEMP/SELECCIÓN LOLI.zip');
var file = fs.readFileSync(process.argv[2]);
var splits = file.toString().split('\n');
console.log(splits.length - 1);
*/


//MY FIRST ASYNC IO
//FILTERED LS
/*
var fs = require('fs');
var path = require('path');
//var file = fs.readFileSync('c:/TEMP/SELECCIÓN LOLI.zip');
var dir = process.argv[2]
var extension = process.argv[3]
var file = fs.readdir(dir, function (err, files) {
   filterFiles = files.filter(function (file) {
      return path.extname(file) === ('.' + extension);
   });
   for (var i = 0; i < filterFiles.length; i++) {
      console.log(filterFiles[i]);
   };
});
*/

//MAKE IT MODULAR
/*var files = require('./files.js');
var dir = process.argv[2];
var extension = process.argv[3];

var fun =  function (err, data) { 
   if (err) {
      console.log(err);
      return;
   }
   for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
   };   
   
};

files(dir, extension, fun);
*/

//HTTP CLIENT
var http = require('http');
var callback = function (response) {
   //console.log(response);
   response.on('data', function (data) {
      console.log(data.toString());
   })
   response.on('error', console.log);
}
var data = http.get(process.argv[2], callback);





