import cloneDeep from 'lodash-es/cloneDeep';
import isUndefined from 'lodash-es/isUndefined';
import merge from 'lodash-es/merge';
import set from 'lodash-es/set';

const mergeSet = (targetObject, keyValueObject) =>
  merge(
    cloneDeep(targetObject),
    ...Object.entries(keyValueObject)
      .filter(([, value]) => !isUndefined(value))
      .map(([path, value]) => set({}, path, value)),
  );

export default mergeSet;
