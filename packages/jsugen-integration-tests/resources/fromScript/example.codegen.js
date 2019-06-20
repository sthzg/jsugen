import toUpper from 'lodash-es/toUpper';

export function main() {
  return `
export const A = 'A';
export const B = ${toUpper('a')};
`;
}
