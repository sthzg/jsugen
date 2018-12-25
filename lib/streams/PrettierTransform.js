import prettier from 'prettier';
import { Transform } from 'stream';

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

export default PrettierTransform;
