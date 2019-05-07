import camelCase from 'lodash-es/camelCase';
import flow from 'lodash-es/flow';
import upperFirst from 'lodash-es/upperFirst';
import toUpper from 'lodash-es/toUpper';
import snakeCase from 'lodash-es/snakeCase';
import { EMPTY_STRING } from '../constants';

/**
 * Joins truthy tokens by EMPTY_STRING.
 */
export const concat = tokens => tokens.filter(Boolean).join(EMPTY_STRING);

/**
 * Transforms input strings to camel case with upper first char.
 */
export const toUpperFirstCamelCase = (...tokens) =>
  flow(
    concat,
    camelCase,
    upperFirst,
  )(tokens);

/**
 * Transforms input strings to camel case.
 */
export const toCamelCase = (...tokens) =>
  flow(
    concat,
    camelCase,
  )(tokens);

/**
 * Transforms input to upper snake case.
 * - fooBar -> FOO_BAR
 */
export const toUpperSnakeCase = (...tokens) =>
  flow(
    concat,
    snakeCase,
    toUpper,
  )(tokens);

/**
 * Wraps input string with single quotes.
 * - foo => 'foo'
 */
export const wrapInSingleQuote = x => `'${x}'`;

/**
 * Wraps input string with an opening and closing curly brace.
 * - foo => { foo }
 */
export const wrapInCurlyBraces = x => `{ ${x} }`;
