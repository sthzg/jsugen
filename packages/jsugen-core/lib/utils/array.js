import castArray from 'lodash-es/castArray';
import merge from 'lodash-es/merge';
import isEmpty from 'lodash-es/isEmpty';
import isString from 'lodash-es/isString';
import isNumber from 'lodash-es/isNumber';
import { toUpperSnakeCase } from './format';

/**
 * Returns the result of `fn(...args)` if predicate is truthy or undefined.
 */
export function maybeItem(predicate, fn, ...args) {
  return predicate ? fn(...args) : undefined;
}

/**
 * Returns a key-value object with input array values as upper-snake-cased keys.
 */
export function arrayToEnum(array) {
  const isNonEmptyStringOrNumber = value =>
    (isString(value) && !isEmpty(value)) || isNumber(value);

  return castArray(array)
    .filter(isNonEmptyStringOrNumber)
    .reduce((result, value) => {
      const key = toUpperSnakeCase(value);

      return merge({}, result, { [key]: value });
    }, {});
}
