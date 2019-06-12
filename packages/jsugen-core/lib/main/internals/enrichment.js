import { promisify } from 'util';
import { camelCase, flatten } from 'lodash-es';
import originalGlob from 'glob';
import { enrichInData } from '../../utils';
import {
  byContextDataDefinitionFiles,
  byContextDataDefinitionGenerators,
  byContextDataDefinitionIgnore,
} from '../selectors';
import { DOT, EMPTY_STRING, PREFIX } from '../../constants';
import { resolveGenerateFunction } from './resolveGenerateFunction';
import { buildOutputDirectoryPath } from './buildOutputDirectoryPath';

const glob = promisify(originalGlob);

/**
 * Enriches context with an array of filenames matching the source file pattern.
 * @param {Context} context
 */
export function enrichDataWithListOfSourceFilePaths(context) {
  const getListOfSourceFilePaths = patterns =>
    flatten(
      patterns.map(pattern =>
        glob.sync(pattern, { ignore: byContextDataDefinitionIgnore(context) }),
      ),
    );

  const patterns = byContextDataDefinitionFiles(context);

  return enrichInData(context, {
    sourceFiles: getListOfSourceFilePaths(patterns),
  });
}

/**
 * Enriches context with an array of references to the `generate` functions.
 * @param {Context} context
 */
export function enrichDataWithGenerateFunctions(context) {
  const generatorsConfig = byContextDataDefinitionGenerators(context);
  const generateFunctions = generatorsConfig.map(resolveGenerateFunction);

  return enrichInData(context, { generateFunctions });
}

/**
 * Enriches context with `outputDirectory` and `outputFileName` information.
 * See docs at {@see buildOutputDirectoryPath} for more information.
 *
 * @param {Context} context
 */
export function enrichDataWithOutputPath(context) {
  const {
    data: {
      generateFunction: { moduleName },
    },
  } = context;

  const outputDirectory = buildOutputDirectoryPath(context);
  const outputFilename = [
    camelCase(moduleName.replace(PREFIX.GENERATE_MODULE_NAME, EMPTY_STRING)),
    'js',
  ].join(DOT);

  return enrichInData(context, { outputDirectory, outputFilename });
}
