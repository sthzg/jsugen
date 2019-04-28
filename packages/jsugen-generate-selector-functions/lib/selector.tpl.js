import camelCase from 'lodash.camelcase';

export default ({ data: { pathInDotNotation: path } }) => `
export function ${camelCase(`by_${path}`)}(property, defaultReturn) {
  return get(property, '${path}', defaultReturn);
}
`;
