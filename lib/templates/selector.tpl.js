import camelCase from 'lodash/camelCase';

export default ({ path }) => `
export function ${camelCase(`by_${path}`)}(property) {
  return get(property, '${path}');
}
`;
