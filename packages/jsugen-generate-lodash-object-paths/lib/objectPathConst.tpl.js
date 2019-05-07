export default ({
  template: {
    vars: { name, path },
  },
}) => `export const ${name} = '${path}';
`;
