import { get } from 'lodash-es';
import { byPathNodesIsEnumLeaf } from './pathNodes';

export function byMemberDefinitionId(memberDefinition) {
  return get(memberDefinition, 'id');
}

export function byMemberDefinitionIsEnum(memberDefinition) {
  const { pathNodes } = memberDefinition;

  return byPathNodesIsEnumLeaf(pathNodes);
}
