/* eslint-disable class-methods-use-this */
const { Writable } = require('stream');

class StdoutWritable extends Writable {
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString());
    callback();
  }
}

module.exports = StdoutWritable;
