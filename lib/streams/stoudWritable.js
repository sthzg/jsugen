const { Writable } = require('stream');

module.exports = new Writable({
  write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString());
    callback();
  },
});
