import {
  cloneDeep,
  get,
  isArray,
  isUndefined,
  mapKeys,
  merge,
  mergeWith,
  set,
} from 'lodash-es';
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
