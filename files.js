var path = require('path');
var fs = require('fs');

module.exports = function (dir, extension, callback) {

   var file = fs.readdir(dir, function (err, files) {

      if (err) {
         return callback(err);
      }

      filterFiles = files.filter(function (file) {
         return path.extname(file) === ('.' + extension);
      });

      callback(null, filterFiles);
   });

}