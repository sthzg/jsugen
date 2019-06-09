import { parseSourceFile } from './sources/jsonSchema/input';
import { WriteConfig } from './models';

/**
 * TODO source formats and source parsing need to become agnostic:
 * Could we leverage Webpack's loader system to get its wealth of supported
 * source formats for "free"?
 *
 * TODO proper error handling
 */
export function runGenerator(context) {
  const {
    config: { dryRun = false },
    data: {
      generateFunction: { generateFunction },
      outputDirectory,
      outputFilename,
      sourceFile,
    },
  } = context;

  const schema = parseSourceFile(sourceFile);

  const writeConfig = new WriteConfig({
    dryRun,
    directory: outputDirectory,
    filename: outputFilename,
  });

  return generateFunction({ schema, writeConfig });
}
