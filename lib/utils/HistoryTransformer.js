const { Transform } = require('stream');

/**
 * Maintains a history object to allow implementers to assert uniqueness.
 *
 * Note: the entries in `this.history` are kept in-memory, which may break many advantages of a
 * stream-based flow. It is generally fine as json schemas usually do not contain an enormous amount
 * of properties, still it is worth to keep in mind.
 */
class HistoryTransformer extends Transform {
  constructor(options) {
    super(options);
    this.history = [];
    this.isUnique = this.isUnique.bind(this);
  }

  isUnique(objectPath) {
    return !this.history.includes(objectPath);
  }
}

module.exports = HistoryTransformer;
