const isEmpty = require('lodash/isEmpty');
const {
  buildObjectPathFromTokens,
  HistoryTransformer,
  removeSchemaProperties,
} = require('../utils');

module.exports = new HistoryTransformer({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const { schema, pathToParent, path } = chunk;

    const tokens = removeSchemaProperties([...pathToParent, ...path]);
    const id = buildObjectPathFromTokens(tokens);

    if (!isEmpty(tokens) && !isEmpty(schema) && this.isUnique(id)) {
      this.push({ tokens, path: id, schema });
      this.history.push(id);
    }

    callback();
  },
});
