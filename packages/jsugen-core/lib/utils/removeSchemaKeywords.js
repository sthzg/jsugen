import { JSON_SCHEMA_V4_KEYWORDS } from '../constants';

function removeSchemaKeywords(pathTokens) {
  return pathTokens.filter(segment => !JSON_SCHEMA_V4_KEYWORDS.includes(segment));
}

export default removeSchemaKeywords;
