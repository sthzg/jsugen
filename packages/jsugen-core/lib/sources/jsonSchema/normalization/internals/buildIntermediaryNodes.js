import { byChunksIsIntermediaryArrayType } from '../../selectors';
import { IntermediaryNode } from '../../models';

export function buildIntermediaryNodes(nodes) {
  return nodes
    .map((item, index) => {
      return byChunksIsIntermediaryArrayType(nodes, index)
        ? new IntermediaryNode({ index, enumValues: item.enumValues })
        : undefined;
    })
    .filter(Boolean);
}
