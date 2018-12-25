import { vocabularies } from '@cloudflare/json-schema-walker';

/**
 * Array of all Json schema V4 object attribute keywords.
 */
export const JSON_SCHEMA_V4_TOKENS = Object.keys(vocabularies.DRAFT_04);

/**
 * Enum of all the specified types in the Json schema V4 specification:
 * https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
 */
export const JSON_SCHEMA_V4_TYPES_ENUM = {
  STRING: 'string',
  NUMBER: 'number',
  INTEGER: 'integer',
  BOOLEAN: 'boolean',
  OBJECT: 'object',
  ARRAY: 'array',
  NULL: 'null',
  ANY: 'any',
};

/**
 * Array of all specified type strings in the Json schema V4 specification:
 * https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
 */
export const JSON_SCHEMA_V4_TYPES = Object.values(JSON_SCHEMA_V4_TYPES_ENUM);

/**
 * Default options to invoke prettier.format with.
 * TODO: allow users to pass path to their .prettierrc as cli option
 */
export const DEFAULT_PRETTIER_OPTIONS = {
  parser: 'babylon',
  singleQuote: true,
  printWidth: 80,
  semi: true,
  trailingComma: 'all',
  bracketSpacing: true,
};

/**
 * Default import for a lodash-like get function.
 * TODO: make configurable through option in package.json (yargs feature).
 */
export const DEFAULT_GET_IMPORT = `import get from 'lodash-es/get';`;

/**
 * Default file docstring.
 * TODO: make configurable through an option.
 */
export const DEFAULT_FILE_DOCSTRING = `
/**
 * @file This file is auto-generated. Do not modify its contents manually.
 */
`;
