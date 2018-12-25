import { Transform } from 'stream';

/**
 * Collects all data piped into the stream and emits the complete chunk.
 *
 * Note: the entries in `this.chunks` are kept in-memory, which may break many advantages of a
 * stream-based flow. It is generally fine as json schemas usually do not contain an enormous amount
 * of properties, still it is worth to keep in mind.
 */
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

export default MemorySinkTransform;
