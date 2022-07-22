import path from 'path';
import endsWith from 'lodash/endsWith';
import last from 'lodash/last';
import { toUpperFirstCamelCase } from '../../utils';
import { BASEDIR_SOURCE_FILE_TOKEN, EMPTY_STRING } from '../../constants';

const WILDCARD = '*.';

const byLastPatternSegment = pattern => last(pattern.split(path.sep));
const byIncludesWildcard = pattern => pattern.includes(WILDCARD);
const byEndsWithPlainExtension = pattern => /\.[a-z]*$/i.test(pattern);
const stripWildcard = pattern => pattern.replace(WILDCARD, EMPTY_STRING);
const sortByStringLengthDesc = (a, b) => b.length - a.length;

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
  const {
    data: {
      definition: {
        files: filePatterns,
        output: { baseDirectory },
      },
      sourceFile,
    },
  } = context;

  const isRelativeMode = baseDirectory.includes(BASEDIR_SOURCE_FILE_TOKEN);

  const directory = !isRelativeMode
    ? baseDirectory
    : path.join(
        path.dirname(sourceFile),
        last(baseDirectory.split(BASEDIR_SOURCE_FILE_TOKEN)),
      );

  const sortedFilenamePatterns = filePatterns
    .map(byLastPatternSegment)
    .filter(byEndsWithPlainExtension)
    .filter(byIncludesWildcard)
    .map(stripWildcard)
    .sort(sortByStringLengthDesc);

  const filename = path.basename(sourceFile);
  const match = sortedFilenamePatterns.find(pattern =>
    endsWith(filename, pattern),
  );

  const modelDirectory = toUpperFirstCamelCase(
    match
      ? filename.replace(`.${match}`, EMPTY_STRING)
      : path.basename(sourceFile, path.extname(sourceFile)),
  );

  return path.join(directory, modelDirectory);
}
