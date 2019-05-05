import cloneDeep from 'lodash-es/cloneDeep';
import merge from 'lodash-es/merge';
import set from 'lodash-es/set';
import { DOT, EMPTY_STRING } from '../constants';

export const enrichIn = (prefix = EMPTY_STRING, targetObject, keyValueObject) =>
  merge(
    cloneDeep(targetObject),
    ...Object.entries(keyValueObject).map(([path, value]) => {
      const targetPath = [prefix, path].join(DOT);
      return set({}, targetPath, value);
    }),
  );

export const enrichInData = (targetObject, keyValueObject) =>
  enrichIn('data', targetObject, keyValueObject);

export const enrichInTemplate = (targetObject, keyValueObject) =>
  enrichIn('template', targetObject, keyValueObject);
