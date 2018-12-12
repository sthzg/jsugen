const prettier = require('prettier');
const { Transform } = require('stream');

class PrettierTransform extends Transform {
  constructor(prettierConfig, options = {}) {
    super(options);
    this.prettierConfig = prettierConfig;
  }

  _transform(chunk, encoding, callback) {
    this.push(prettier.format(chunk.toString(), this.prettierConfig));
    callback();
  }
}

module.exports = PrettierTransform;
