const { Transform } = require('stream');
const snakeCase = require('lodash/snakeCase');
const { JSON_SCHEMA_V4_TYPES_ENUM } = require('../constants');

const POSTFIX_TYPES = [
  JSON_SCHEMA_V4_TYPES_ENUM.ARRAY,
  JSON_SCHEMA_V4_TYPES_ENUM.OBJECT,
];

function buildPathName(tokens, schema) {
  const { type } = schema;
  const fragments = POSTFIX_TYPES.includes(type) ? tokens.concat(type) : tokens;

  return snakeCase(fragments.join('_')).toUpperCase();
}

module.exports = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const { schema, path, tokens } = chunk;
    this.push({ schema, path, name: buildPathName(tokens, schema) });
    callback();
  },
});
