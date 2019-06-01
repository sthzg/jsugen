import {
  cloneDeep,
  isArray,
  isUndefined,
  mapKeys,
  merge,
  mergeWith,
  set,
} from 'lodash-es';
import { DOT, PREFIX } from '../constants';

// ---
// Enrichment Utils.
// ---
export function enrichIn(targetObject, keyValueObject, prefix) {
  const keyValueObjectWithPrefix = mapKeys(keyValueObject, (value, key) =>
    [prefix, key].filter(Boolean).join(DOT),
  );

  return mergeSet(targetObject, keyValueObjectWithPrefix);
}

export function enrichInData(targetObject, keyValueObject) {
  return enrichIn(targetObject, keyValueObject, PREFIX.DATA);
}

export function enrichInTemplate(targetObject, keyValueObject) {
  return enrichIn(targetObject, keyValueObject, PREFIX.TEMPLATE);
}

// ---
// Merge Utils.
// ---
export function mergeSet(targetObject, keyValueObject) {
  return merge(
    cloneDeep(targetObject),
    ...Object.entries(keyValueObject)
      .filter(([, value]) => !isUndefined(value))
      .map(([path, value]) => set({}, path, value)),
  );
}
export function mergeConcat(targetObject, ...sources) {
  const customizer = (objValue, srcValue) =>
    isArray(objValue) ? objValue.concat(srcValue) : undefined;

  return mergeWith(targetObject, ...sources, customizer);
}
