import { byPathNodesIsArrayLeaf, byPathNodesIsEnumLeaf } from '../../selectors';
import { enrichInTemplate } from '../../utils';
import { buildArrayNthVars } from './internals';

export function addMemberDefinitionsForNonEnumArrayIndexes(memberDefinition) {
  const { pathNodes } = memberDefinition;
  const isNonEnumArray =
    byPathNodesIsArrayLeaf(pathNodes) && !byPathNodesIsEnumLeaf(pathNodes);

  if (!isNonEnumArray) {
    return [memberDefinition];
  }

  return [
    memberDefinition,
    enrichInTemplate(memberDefinition, {
      vars: buildArrayNthVars(pathNodes),
    }),
  ];
}
