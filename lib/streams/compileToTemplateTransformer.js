const { Transform } = require('stream');

module.exports = template =>
  new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      this.push(template(chunk));
      callback();
    },
  });
