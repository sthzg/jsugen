/**
 * A data object containing values to describe a member in an object graph.
 */
export class PathNode {
  constructor({ enumValues, member, type }) {
    this.enumValues = enumValues;
    this.member = member;
    this.type = type;
  }
}
