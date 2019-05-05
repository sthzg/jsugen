import isArray from 'lodash-es/isArray';
import mergeWith from 'lodash-es/mergeWith';

const customizer = (objValue, srcValue) =>
  isArray(objValue) ? objValue.concat(srcValue) : undefined;

const mergeConcat = (targetObject, ...sources) =>
  mergeWith(targetObject, ...sources, customizer);

export default mergeConcat;
