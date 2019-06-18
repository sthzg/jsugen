import path from 'path';
import { last } from 'lodash-es';
import { toUpperFirstCamelCase } from '../../utils';
import { BASEDIR_SOURCE_FILE_TOKEN } from '../../constants';
import {
  byContextDataDefinitionOutputBaseDirectory,
  byContextDataSourceFile,
} from './selectors';

/**
 * Returns the output directory path based on the configured settings.
 *
 * Currently supported mode tokens:
 * - <sourceFile>
 *   if the definition config contains a `<sourceFile>` token, the output file
 *   should be written relative to the source file by the path configured after
 *   that token, e.g. `<sourceFile>./../models`.
 *
 * If no mode token is present the configured path is resolved statically.
 */
export function buildOutputDirectoryPath(context) {
  const baseDirectory = byContextDataDefinitionOutputBaseDirectory(context);
  const sourceFile = byContextDataSourceFile(context);

  const isRelativeMode = baseDirectory.includes(BASEDIR_SOURCE_FILE_TOKEN);

  const directory = !isRelativeMode
    ? baseDirectory
    : path.join(
        path.dirname(sourceFile),
        last(baseDirectory.split(BASEDIR_SOURCE_FILE_TOKEN)),
      );
  const modelDirectory = toUpperFirstCamelCase(
    path.basename(sourceFile, path.extname(sourceFile)),
  );

  return path.join(directory, modelDirectory);
}
