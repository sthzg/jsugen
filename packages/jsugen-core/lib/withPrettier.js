import prettier from 'prettier';

const withPrettier = prettierConfig => content => {
  return prettier.format(content, prettierConfig);
};

export default withPrettier;
