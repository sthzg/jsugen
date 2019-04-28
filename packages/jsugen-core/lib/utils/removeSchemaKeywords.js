import { JSON_SCHEMA_V4_KEYWORDS } from '../constants';

function removeSchemaKeywords(pathTokens) {
  return pathTokens.filter(token => !JSON_SCHEMA_V4_KEYWORDS.includes(token));
}

export default removeSchemaKeywords;
