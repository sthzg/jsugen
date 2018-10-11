const { Transform } = require('stream');
const {
  buildObjectPathFromTokens,
  removeSchemaProperties,
} = require('../utils');

module.exports = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const { schema, pathToParent = [], path } = chunk;

    const tokens = removeSchemaProperties([...pathToParent, path]);
    const id = buildObjectPathFromTokens(tokens);

    if (schema.enum) {
      this.push({ tokens, path: id, schema });
    }

    callback();
  },
});
