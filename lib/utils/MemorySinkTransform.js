const { Transform } = require('stream');

class MemorySinkTransform extends Transform {
  constructor(options = {}) {
    super(options);
    this.chunks = [];
  }

  _transform(chunk, encoding, callback) {
    this.chunks.push(chunk.toString());
    callback();
  }

  _final(callback) {
    this.push(this.chunks.join(''));
    callback();
  }
}

module.exports = MemorySinkTransform;
