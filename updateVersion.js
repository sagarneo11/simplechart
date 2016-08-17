/**
 * callback after webpack-git-hash creates a new version
 */
var fs = require('fs');
var path = require('path');

module.exports = function(hash, deletedFiles, stats) {
  ['index.html', 'widget.html'].forEach(function(filename) {
    var filepath = path.join(__dirname, filename);
    var content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(
      new RegExp('static\\/(widget|app)\\.\\w{' + hash.length + '}\\.js'),
      function(oldFile, p1) {
        var newFile = 'static/' + p1 + '.' + hash + '.js';
        console.log('Updating ' + oldFile + ' to ' + newFile + ' in ' + filename);
        return newFile;
      }
    );
    fs.writeFileSync(filePath, content);
  });
};
