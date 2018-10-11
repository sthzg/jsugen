const { createWriteStream } = require('fs');

module.exports = destination => createWriteStream(destination);
