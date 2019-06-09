import path from 'path';
import fs from 'fs-extra';
import { parseSourceFile } from './sources/jsonSchema/input';

/**
 * TODO source formats and source parsing need to become agnostic:
 * Could we leverage Webpack's loader system to get its wealth of supported
 * source formats for "free"?
 *
 * TODO split and strengthen implementation
 * - responsibilities are currently too mixed here:
 *    - parsing
 *    - directory creation
 *    - running the generator (which immediately writes but should maybe
 *      just return the generated code chunk to delegate writing further)
 *    - io operations should use the `async` implementation
 *    - proper error handling on various stages is required
 */
export function runGenerator(context) {
  const {
    data: {
      generateFunction: { generateFunction },
      outputDirectory,
      outputFilename,
      sourceFile,
    },
  } = context;

  const schema = parseSourceFile(sourceFile);
  const out = path.join(outputDirectory, outputFilename);

  fs.ensureDirSync(path.resolve(outputDirectory));

  return generateFunction({ schema, out });
}
