exports.readInput = function(fileName) {
    const fs = require('fs');

    let data;
    try {
        return fs.readFileSync(fileName, 'utf8').split('\r\n');
    } catch (err) {
        console.error(err);
    }
}