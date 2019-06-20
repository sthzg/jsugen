import { WriteConfig } from '../../models';

export function runGenerator(context) {
  const {
    config: { dryRun = false },
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
  });

  return generateFunction({ schema, writeConfig });
}
