const { Transform } = require('stream');

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

module.exports = CompileToTemplateTransform;
