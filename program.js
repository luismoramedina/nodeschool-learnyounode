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
/*var http = require('http');
var callback = function (response) {
   //console.log(response);
   response.on('data', function (data) {
      console.log(data.toString());
   })
   response.on('error', console.log);
}
var data = http.get(process.argv[2], callback);
*/
//HTTP COLLECT
/*
var http = require('http');
var bl = require('bl');
var callback = function (response) {
   //console.log(response);
   response.pipe(bl(function (err, data) {
      console.log(data.length);
      console.log(data.toString());
   }))
}
var data = http.get(process.argv[2], callback);
*/
//JUGGLING ASYNC
/*
var http = require('http');
var bl = require('bl');

var datas = [];
var counter = 0;
function httpGetWrapper (index) {
   http.get(process.argv[index + 2], function (response) {
      response.pipe(bl(function (err, data) {
         datas[index] = data.toString();
         counter = counter + 1;
         if (counter === 3) {
            for (var i = 0; i < datas.length; i++) {
               console.log(datas[i]);
            };
         };
      }))
   })
}
httpGetWrapper(0);
httpGetWrapper(1);
httpGetWrapper(2);
*/
//TIME SERVER
/*var net = require('net')

function getDate() {
   var date = new Date()
   return (date.getFullYear() 
      //TODO padding function
      + "-" + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1))
      + "-" + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
      + " " + (date.getHours() > 9 ? date.getHours() : "0" + date.getHours())
      + ":" + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
      ).toString();
}

var server = net.createServer(function (socket) {
//console.log("request!" + console.dir(socket));
//socket.write("hello");
   socket.write(getDate());
   socket.end();
})
var port = process.argv[2];
server.listen(port)
console.log("listen on " + port)
*/
//HTTP FILE SERVER
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
   console.log("request!");

   stream = fs.createReadStream(process.argv[3]);
//   stream.on('open', function () {
//      console.log("open");
//      stream.pipe(response);
//   });
   stream.pipe(response);
})
var port = process.argv[2];
server.listen(port);
console.log("listen on " + port);