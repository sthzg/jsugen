const { Transform } = require('stream');
const {
  buildObjectPathFromTokens,
  removeSchemaProperties,
} = require('../utils');

class FilterEnumsTransform extends Transform {
  constructor(options = {}) {
    super({ objectMode: true, ...options });
  }

  _transform(chunk, encoding, callback) {
    const { schema, pathToParent = [], path } = chunk;

    const tokens = removeSchemaProperties([...pathToParent, path]);
    const id = buildObjectPathFromTokens(tokens);

    if (schema.enum) {
      this.push({ tokens, path: id, schema });
    }

    callback();
  }
}

module.exports = FilterEnumsTransform;
