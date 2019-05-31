import { isEmpty, isEqual } from 'lodash-es';
import { PathNode } from '../../../../models';
import {
  byChunkMemberName,
  byChunkSchemaEnum,
  byChunkSchemaType,
} from '../../selectors';

/**
 * Reduces each leaf member to an array of `PathNode` elements.
 */
export function toPathNodesArrayFactory(branches) {
  const byParent = node => {
    return branches.find(needle => isEqual(needle.fullPath, node.pathToParent));
  };

  return function toPathNodesArray(current, result = []) {
    const nextResult = [
      new PathNode({
        enumValues: byChunkSchemaEnum(current),
        type: byChunkSchemaType(current),
        member: byChunkMemberName(current),
      }),
      ...result,
    ];

    return isEmpty(current.pathToParent)
      ? nextResult
      : toPathNodesArray(byParent(current), nextResult);
  };
}
