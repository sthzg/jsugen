const { Transform } = require('stream');
const castArray = require('lodash/castArray');

class PrependToFileTransform extends Transform {
  constructor(headers, options = {}) {
    super(options);
    this.headers = castArray(headers);
  }

  _transform(chunk, encoding, callback) {
    this.push([...this.headers, chunk].join('\n'));
    callback();
  }
}

module.exports = PrependToFileTransform;
