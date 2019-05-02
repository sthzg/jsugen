const stringify = input => JSON.stringify(input, null, 2);

export default ({
  template: {
    vars: { valuesConstant, enumConstant },
  },
}) => `
export const ${valuesConstant.name} = ${stringify(valuesConstant.values)};
export const ${enumConstant.name} = ${stringify(enumConstant.values)};
`;
