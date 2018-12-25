import { Transform } from 'stream';
import castArray from 'lodash.castarray';

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

export default PrependToFileTransform;
