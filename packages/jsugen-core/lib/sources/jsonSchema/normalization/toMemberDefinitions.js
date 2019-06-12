import {
  buildId,
  buildIntermediaryNodes,
  buildPathNodes,
  toPathNodesArrayFactory,
} from './internals';
import { MemberDefinition } from '../../../models';

export function toMemberDefinitions(branches) {
  const toPathNodesArray = toPathNodesArrayFactory(branches);

  return branches.map(node => {
    const allNodes = toPathNodesArray(node);
    const intermediaryNodes = buildIntermediaryNodes(allNodes);
    const pathNodes = buildPathNodes(allNodes, intermediaryNodes);
    const id = buildId(pathNodes);

    return new MemberDefinition({
      id,
      pathNodes,
    });
  });
}
