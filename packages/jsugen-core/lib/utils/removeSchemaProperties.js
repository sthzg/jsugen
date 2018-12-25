import { JSON_SCHEMA_V4_TOKENS } from '../constants';

function removeSchemaProperties(pathTokens) {
  return pathTokens.filter(segment => !JSON_SCHEMA_V4_TOKENS.includes(segment));
}

export default removeSchemaProperties;
