const prettier = require('prettier');
const { Transform } = require('stream');

function withPrettierTransform(config) {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(prettier.format(chunk.toString(), config));
      callback();
    },
  });
}

module.exports = withPrettierTransform;
