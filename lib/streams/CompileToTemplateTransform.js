import { Transform } from 'stream';

class CompileToTemplateTransform extends Transform {
  constructor(template, options = {}) {
    super({ objectMode: true, ...options });
    this.template = template;
  }

  _transform(chunk, encoding, callback) {
    this.push(this.template(chunk));
    callback();
  }
}

export default CompileToTemplateTransform;
