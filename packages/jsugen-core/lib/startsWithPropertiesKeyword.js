import first from 'lodash.first';

const PROPERTIES = 'properties';

const startsWithPropertiesKeyword = context => {
  const { pathToParent, path } = context;

  return first([...pathToParent, ...path]) === PROPERTIES;
};

export default startsWithPropertiesKeyword;
