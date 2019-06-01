import camelCase from 'lodash-es/camelCase';
import flow from 'lodash-es/flow';
import upperFirst from 'lodash-es/upperFirst';
import toUpper from 'lodash-es/toUpper';
import snakeCase from 'lodash-es/snakeCase';
import { UNDERSCORE } from '../constants';

/**
 * Joins truthy tokens by EMPTY_STRING.
 */
export function concat(tokens) {
  return tokens.filter(Boolean).join(UNDERSCORE);
}

/**
 * Transforms input strings to camel case with upper first char.
 */
export function toUpperFirstCamelCase(...tokens) {
  return flow(
    concat,
    camelCase,
    upperFirst,
  )(tokens);
}

/**
 * Transforms input strings to camel case.
 */
export function toCamelCase(...tokens) {
  return flow(
    concat,
    camelCase,
  )(tokens);
}

/**
 * Transforms input to upper snake case.
 * - fooBar -> FOO_BAR
 */
export function toUpperSnakeCase(...tokens) {
  return flow(
    concat,
    snakeCase,
    toUpper,
  )(tokens);
}

/**
 * Wraps input string with single quotes.
 * - foo => 'foo'
 */
export function wrapInSingleQuote(x) {
  return `'${x}'`;
}

/**
 * Wraps input string with an opening and closing curly brace.
 * - foo => { foo }
 */
export function wrapInCurlyBraces(x) {
  return `{ ${x} }`;
}

/**
 * Wraps input string with an opening and closing round bracket.
 * - foo => ( foo )
 */
export function wrapInRoundBrackets(x) {
  return `( ${x} )`;
}
