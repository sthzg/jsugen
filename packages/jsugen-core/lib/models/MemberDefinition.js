/**
 * A data object containing values to describe each member in an object graph.
 *
 * It is the task of `source` packages to normalize different inputs like
 * JSONSchema, Javascript, XML, etc. into instances of `MemberDefinition` which
 * then act as interfaces to the `generator` packages to generate code.
 */
export class MemberDefinition {
  constructor({ id, pathNodes }) {
    this.id = id;
    this.pathNodes = pathNodes;
  }
}
