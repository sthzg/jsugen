const { Transform } = require('stream');

function withFileHeadTransform(...headers) {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push([...headers, chunk].join('\n'));
      callback();
    },
  });
}

module.exports = withFileHeadTransform;
