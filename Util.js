exports.readFile = function(fileName) {
    const fs = require('fs');

    let data;
    try {
        return fs.readFileSync(fileName, 'utf8');
    } catch (err) {
        console.error(err);
    }
}