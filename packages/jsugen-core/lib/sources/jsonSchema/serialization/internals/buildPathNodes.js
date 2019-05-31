import { minusOne } from '../../../../utils';
import { PathNode } from '../../../../models';
import { byChunksIsIntermediaryArrayType } from '../../selectors';

export function buildPathNodes(nodes, intermediaryNodes) {
  return nodes
    .map((pathNode, index) => {
      const match = intermediaryNodes.find(
        needle => index === minusOne(needle.index),
      );

      return match
        ? new PathNode({
            ...pathNode,
            enumValues: match.enumValues,
          })
        : pathNode;
    })
    .filter((_, index) => !byChunksIsIntermediaryArrayType(nodes, index));
}
