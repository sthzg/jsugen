import cloneDeep from 'lodash-es/cloneDeep';
import get from 'lodash-es/get';
import isArray from 'lodash-es/isArray';
import isUndefined from 'lodash-es/isUndefined';
import mapKeys from 'lodash-es/mapKeys';
import merge from 'lodash-es/merge';
import mergeWith from 'lodash-es/mergeWith';
import set from 'lodash-es/set';
import { DOT } from '../constants';
import { Prefix } from '../enums';

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
  return enrichIn(targetObject, keyValueObject, Prefix.DATA);
}

export function enrichInTemplate(targetObject, keyValueObject) {
  return enrichIn(targetObject, keyValueObject, Prefix.TEMPLATE);
}

/**
 * Flattens an input object over an array at `sourcePath`, e.g:
 *
 * In:  [{ a: 1, sourcePath: [1, 2, 3] }]
 * Out: [{ a: 1, targetPath: 1 }, { a: 1, targetPath: 2 }, { a: 1, targetPath: 3 }]
 *
 * It is used to flatten the .jsugen.config.js object over each `definition` entry which allows
 * the data pipeline to execute the generators one by one while having access to all config values.
 *
 * @param sourcePath -  object path to `input` member that should be flattened over
 * @param targetPath - object path where flattened item will be set to
 * @param redactSourcePath - bool indicating whether to keep original value at source path
 * @param redactLabel - debug label to add at `sourcePath` if `redactSourcePath` is true
 * @return {function(*=): *}
 */
export function withEnrichByFlattenOverArray({
  sourcePath,
  targetPath,
  redactSourcePath = true,
  redactLabel = 'enrichByFlattenOverArray',
}) {
  return function enrichByFlattenOverArray(input) {
    const sources = get(input, sourcePath, []);

    return sources.map(source =>
      enrichIn(input, {
        [targetPath]: source,
        [sourcePath]: redactSourcePath
          ? `[lifecycle]: consumed in ${redactLabel}`
          : sources,
      }),
    );
  };
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
