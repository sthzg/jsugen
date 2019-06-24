import { WriteConfig } from '../../models';

export function runGenerator(context) {
  const {
    config: { dryRun, silent },
    data: {
      generateFunction: { generateFunction },
      sourceFile,
      outputDirectory,
      outputFilename,
    },
  } = context;

  const writeConfig = new WriteConfig({
    dryRun,
    directory: outputDirectory,
    filename: outputFilename,
    silent,
  });

  return generateFunction({ sourceFile, writeConfig });
}
