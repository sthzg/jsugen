const { JSON_SCHEMA_V4_TOKENS } = require('../constants');

function removeSchemaProperties(pathTokens) {
  return pathTokens.filter(segment => !JSON_SCHEMA_V4_TOKENS.includes(segment));
}

module.exports = removeSchemaProperties;
