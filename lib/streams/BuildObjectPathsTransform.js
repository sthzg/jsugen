const { Transform } = require('stream');
const snakeCase = require('lodash/snakeCase');
const { JSON_SCHEMA_V4_TYPES_ENUM } = require('../constants');

const POSTFIX_TYPES = [
  JSON_SCHEMA_V4_TYPES_ENUM.ARRAY,
  JSON_SCHEMA_V4_TYPES_ENUM.OBJECT,
];

class BuildObjectPathsTransform extends Transform {
  static buildPathName(tokens, schema) {
    const { type } = schema;
    const fragments = POSTFIX_TYPES.includes(type)
      ? tokens.concat(type)
      : tokens;

    return snakeCase(fragments.join('_')).toUpperCase();
  }

  constructor(options = {}) {
    super({ objectMode: true, ...options });
  }

  _transform(chunk, encoding, callback) {
    const { schema, path, tokens } = chunk;
    this.push({
      schema,
      path,
      name: BuildObjectPathsTransform.buildPathName(tokens, schema),
    });
    callback();
  }
}

module.exports = BuildObjectPathsTransform;
