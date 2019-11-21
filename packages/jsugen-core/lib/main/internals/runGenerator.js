import { WriteConfig } from '../../models';

export function runGenerator(context) {
  const {
    config,
    config: { dryRun, silent, moduleFormat },
    data: {
      generateFunction: { generateFunction },
      sourceFile,
      outputDirectory,
      outputFilename,
    },
  } = context;

  const writeConfig = new WriteConfig({
    directory: outputDirectory,
    filename: outputFilename,
    dryRun,
    moduleFormat,
    silent,
  });

  return generateFunction({ sourceFile, writeConfig, config });
}
