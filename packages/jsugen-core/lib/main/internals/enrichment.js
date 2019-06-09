import { promisify } from 'util';
import path from 'path';
import { camelCase, flatten } from 'lodash-es';
import originalGlob from 'glob';
import { enrichInData, toUpperFirstCamelCase } from '../../utils';
import {
  byContextDataDefinitionFiles,
  byContextDataDefinitionGenerators,
  byContextDataDefinitionOutputBaseDirectory,
} from '../selectors';
import { EMPTY_STRING, PREFIX } from '../../constants';
import { resolveGenerateFunction } from './resolveGenerateFunction';

const glob = promisify(originalGlob);

export function enrichDataWithListOfSourceFilePaths(context) {
  const getListOfSourceFilePaths = patterns =>
    flatten(patterns.map(pattern => glob.sync(pattern)));

  const patterns = byContextDataDefinitionFiles(context);

  return enrichInData(context, {
    sourceFiles: getListOfSourceFilePaths(patterns),
  });
}

export function enrichDataWithOutputBaseDirectory(context) {
  const baseDirectory = byContextDataDefinitionOutputBaseDirectory(context);

  return enrichInData(context, { baseDirectory });
}

export function enrichDataWithGenerateFunctions(context) {
  const generatorsConfig = byContextDataDefinitionGenerators(context);
  const generateFunctions = generatorsConfig.map(resolveGenerateFunction);

  return enrichInData(context, { generateFunctions });
}

export function enrichDataWithOutputPath(context) {
  const {
    data: {
      baseDirectory,
      sourceFile,
      generateFunction: { moduleName },
    },
  } = context;

  const withExt = input => `${input}.js`;

  const outputFilename = withExt(
    camelCase(moduleName.replace(PREFIX.GENERATE_MODULE_NAME, EMPTY_STRING)),
  );

  // TODO we need a more flexible system (=> think about name clashes)
  const outputDirectory = path.join(
    baseDirectory,
    /* Directory Name */
    toUpperFirstCamelCase(path.basename(sourceFile, path.extname(sourceFile))),
  );

  return enrichInData(context, { outputDirectory, outputFilename });
}
