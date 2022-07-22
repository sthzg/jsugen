/* eslint-disable no-console */
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';

export function log(...args) {
  return console.log(...args);
}

export function logError(...args) {
  return console.error(...args);
}

export function logIf(predicate) {
  const shouldLog = isFunction(predicate) ? predicate() : Boolean(predicate);

  return shouldLog ? (...args) => log(...args) : noop;
}
