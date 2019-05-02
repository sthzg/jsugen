import { toCamelCase } from '@sthzg/jsugen-core/lib/utils';

const PREFIX = 'by_';

export default ({ data: { pathInDotNotation: path } }) => `
export function ${toCamelCase(PREFIX, path)}(property, defaultReturn) {
  return get(property, '${path}', defaultReturn);
}
`;
