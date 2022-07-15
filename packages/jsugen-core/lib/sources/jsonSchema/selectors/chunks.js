import first from 'lodash-es/first';
import get from 'lodash-es/get';
import last from 'lodash-es/last';
import { minusOne } from '../../../utils';

export function byChunksIsIntermediaryArrayType(chunks, index) {
  const member = get(chunks, [index, 'member']);
  const previousType = get(chunks, [minusOne(index), 'type']);

  const doesMatchKeyword = ['items', 'contains'].includes(member);
  const isParentArrayType = previousType === 'array';

  return doesMatchKeyword && isParentArrayType;
}

export function byChunkRootMemberName(chunk) {
  const { pathToParent, path } = chunk;
  const [, rootMember] = [].concat(pathToParent, path);

  return rootMember;
}

export function byChunkSchema(chunk) {
  return get(chunk, 'schema');
}

export function byChunkHasJsonSchemaDefinition(chunk) {
  return !!chunk.schema;
}

export const byChunkStartsWithPropertiesKeyword = context => {
  const { pathToParent, path } = context;

  return first([...pathToParent, ...path]) === 'properties';
};

export function byChunkMemberName(chunk) {
  return last(get(chunk, 'path'));
}

export function byChunkSchemaType(node) {
  return get(byChunkSchema(node), 'type');
}

export function byChunkSchemaEnum(node) {
  return get(byChunkSchema(node), 'enum');
}
