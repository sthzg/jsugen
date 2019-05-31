import { get, isEqual, last } from 'lodash-es';
import { JSON_SCHEMA_V4_TYPES_ENUM } from '../constants';

// ---
// Mixed.
// ---
export function byIsLeaf(pathNode, pathNodes) {
  return isEqual(pathNode, last(pathNodes));
}

// ---
// Path Nodes Array.
// ---
export function byPathNodesIsArrayLeaf(pathNodes) {
  const { type: leafType } = last(pathNodes);

  return isEqual(leafType, JSON_SCHEMA_V4_TYPES_ENUM.ARRAY);
}

export function byPathNodesIsEnumLeaf(pathNodes) {
  const { type: leafType, enumValues: leafEnumValues } = last(pathNodes);

  return isEqual(leafType, JSON_SCHEMA_V4_TYPES_ENUM.ARRAY) && leafEnumValues;
}

export function byPathNodesEnumValues(pathNodes) {
  return get(last(pathNodes), 'enumValues');
}

// ---
// Path Node Instance.
// ---
export function byPathNodeIsEnum(pathNode) {
  return Boolean(get(pathNode, 'enumValues'));
}

export function byPathNodeType(pathNode) {
  return get(pathNode, 'type');
}

export function byPathNodeIsArray(pathNode) {
  return isEqual(byPathNodeType(pathNode), JSON_SCHEMA_V4_TYPES_ENUM.ARRAY);
}
