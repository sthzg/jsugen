import { COMMA, toCamelCase, wrapInSingleQuote } from '@sthzg/jsugen-core';

export function template({
  template: {
    vars: { argNames, selectorName, path },
  },
}) {
  const indexArgs = `${argNames.map(argName => `${argName} = 0`).join(COMMA)}`;
  const signature = ['property', indexArgs, 'defaultReturn']
    .filter(Boolean)
    .join(COMMA);
  const pathArray = path
    .map(token => (argNames.includes(token) ? token : wrapInSingleQuote(token)))
    .join(COMMA);

  return `
  export function ${toCamelCase(selectorName)}(${signature}) {
    return get(property, [${pathArray}], defaultReturn);
  }
  `;
}
