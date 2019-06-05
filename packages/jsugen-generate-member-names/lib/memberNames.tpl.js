import { toUpperSnakeCase } from '@sthzg/jsugen-core';

const { stringify } = JSON;

export function template({
  template: {
    vars: { member },
  },
}) {
  const constName = toUpperSnakeCase(member);

  return `export const ${constName} = ${stringify(member)}`;
}
