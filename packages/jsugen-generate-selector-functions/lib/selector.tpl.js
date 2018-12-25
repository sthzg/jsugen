import camelCase from 'lodash.camelcase';

export default ({ path }) => `
export function ${camelCase(`by_${path}`)}(property) {
  return get(property, '${path}');
}
`;
