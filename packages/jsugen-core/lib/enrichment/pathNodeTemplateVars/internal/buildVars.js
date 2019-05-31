import { byPathNodesEnumValues } from '../../../selectors';
import { buildName } from './buildName';
import { buildObjectPathArray } from './buildObjectPathArray';
import { buildArgNames } from './buildArgNames';
import { PREFIX } from '../constants';

export function buildVars(pathNodes, options) {
  return {
    argNames: buildArgNames(pathNodes, options),
    enumValues: byPathNodesEnumValues(pathNodes),
    path: buildObjectPathArray(pathNodes, options),
    name: buildName(pathNodes, options),
    selectorName: buildName(pathNodes, {
      ...options,
      prefix: PREFIX.BY,
    }),
  };
}

export function buildArrayNthVars(pathNodes) {
  const options = { includeNth: true };

  return buildVars(pathNodes, options);
}
