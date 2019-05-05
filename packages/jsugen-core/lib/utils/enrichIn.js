import mapKeys from 'lodash-es/mapKeys';
import mergeSet from './mergeSet';
import { DOT } from '../constants';

const PREFIX = {
  DATA: 'data',
  TEMPLATE: 'template',
};

export const enrichIn = (targetObject, keyValueObject, prefix) => {
  const keyValueObjectWithPrefix = mapKeys(keyValueObject, (value, key) =>
    [prefix, key].filter(Boolean).join(DOT),
  );

  return mergeSet(targetObject, keyValueObjectWithPrefix);
};

export const enrichInData = (targetObject, keyValueObject) =>
  enrichIn(targetObject, keyValueObject, PREFIX.DATA);

export const enrichInTemplate = (targetObject, keyValueObject) =>
  enrichIn(targetObject, keyValueObject, PREFIX.TEMPLATE);
