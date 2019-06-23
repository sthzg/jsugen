import { WriteConfig } from '../../models';

export function runGenerator(context) {
  const {
    config: { dryRun, silent },
    data: {
      generateFunction: { generateFunction },
      parsedSource: schema,
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

  return generateFunction({ schema, writeConfig });
}
