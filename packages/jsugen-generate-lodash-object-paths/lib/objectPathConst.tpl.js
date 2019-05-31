import { COMMA, wrapInSingleQuote } from '@sthzg/jsugen-core';

export function template({
  template: {
    vars: { argNames, selectorName, path },
  },
}) {
  const withPathPostfix = `${selectorName}Path`;
  const signature = `${argNames.map(argName => `${argName} = 0`).join(COMMA)}`;
  const pathArray = path
    .map(token => (argNames.includes(token) ? token : wrapInSingleQuote(token)))
    .join(COMMA);

  return `export const ${withPathPostfix} = (${signature}) => [${pathArray}];
  `;
}
