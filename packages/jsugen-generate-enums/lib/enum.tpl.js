export function template({
  template: {
    vars: { valuesConstant, enumConstant },
  },
}) {
  const stringify = input => JSON.stringify(input, null, 2);

  return `
export const ${valuesConstant.name} = ${stringify(valuesConstant.values)};
export const ${enumConstant.name} = ${stringify(enumConstant.values)};
`;
}
