import prettier from 'prettier';

export function withPrettier(prettierConfig) {
  return content => {
    return prettier.format(content, prettierConfig);
  };
}
