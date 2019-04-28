export default ({
  data: { pathName: name, pathInDotNotation: path },
}) => `export const ${name} = '${path}';
`;
