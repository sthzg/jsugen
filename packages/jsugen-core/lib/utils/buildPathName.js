import snakeCase from 'lodash.snakecase';
import { JSON_SCHEMA_V4_TYPES_ENUM } from '../constants';

const POSTFIX_TYPES = [
  JSON_SCHEMA_V4_TYPES_ENUM.ARRAY,
  JSON_SCHEMA_V4_TYPES_ENUM.OBJECT,
];

/**
 * Builds a string representation for a path name that can be used in IDs.
 */
const buildPathName = (tokens, type) => {
  const fragments = POSTFIX_TYPES.includes(type) ? tokens.concat(type) : tokens;

  return snakeCase(fragments.join('_')).toUpperCase();
};

export default buildPathName;
