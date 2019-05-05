import camelCase from 'lodash-es/camelCase';
import flow from 'lodash-es/flow';
import upperFirst from 'lodash-es/upperFirst';
import { EMPTY_STRING } from '../constants';

/**
 * Join truthy tokens by EMPTY_STRING.
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
