module.exports = {
    options: {
        override: function(detail, include) {
            if (detail.task === 'pug') {
                checkForNewerImports(detail.path, detail.time, include);
            } else {
                include(false);
            }
        }
    }
};

var fs = require('fs');
var path = require('path');

function checkForNewerImports(jadeFile, mTime, include) {
    fs.readFile(jadeFile, 'utf8', function (err, data) {
        var jadeDir = path.dirname(jadeFile),
            // be careful with this regex - specific to my project's needs - change as needed.
            regex = /include (.+)/g,
            shouldInclude = false,
            match;

        while ((match = regex.exec(data)) !== null) {
            var importFile = jadeDir + '/' + match[1] + '.pug';
            if (fs.existsSync(importFile)) {
                var stat = fs.statSync(importFile);
                if (stat.mtime > mTime) {
                    shouldInclude = true;
                    break;
                }
            }
        }
        include(shouldInclude);
    });
}