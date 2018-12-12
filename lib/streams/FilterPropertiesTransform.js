const isEmpty = require('lodash/isEmpty');
const {
  buildObjectPathFromTokens,
  HistoryTransformer,
  removeSchemaProperties,
} = require('../utils');

class FilterPropertiesTransform extends HistoryTransformer {
  constructor(options = {}) {
    super({ objectMode: true, ...options });
  }

  _transform(chunk, encoding, callback) {
    const { schema, pathToParent, path } = chunk;

    const tokens = removeSchemaProperties([...pathToParent, ...path]);
    const id = buildObjectPathFromTokens(tokens);

    if (!isEmpty(tokens) && !isEmpty(schema) && this.isUnique(id)) {
      this.push({ tokens, path: id, schema });
      this.history.push(id);
    }

    callback();
  }
}

module.exports = FilterPropertiesTransform;
