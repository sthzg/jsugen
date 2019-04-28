import {
  buildSelectorPathInDotNotation,
  removeSchemaKeywords,
  enrichInData,
  buildPathName,
} from './utils';

const enrichWithObjectPathData = context => {
  const { schema, pathToParent, path } = context;

  const pathTokens = removeSchemaKeywords([...pathToParent, ...path]);
  const pathInDotNotation = buildSelectorPathInDotNotation(pathTokens);
  const pathName = buildPathName(pathTokens, schema.type);

  return enrichInData(context, {
    pathInDotNotation,
    pathTokens,
    pathName,
  });
};

export default enrichWithObjectPathData;
