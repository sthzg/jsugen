import path from 'path';
import { log, logError, WriteConfig } from '@sthzg/jsugen-core';
import { dryRunOption, outOption, srcOption } from './options';

// ---
// Selectors.
// ---
function byIsDryRun(argv) {
  const { dryRun, out } = argv;

  if (!dryRun && !out) {
    log('Performing a dry run as `out` argument is empty');
  }

  return dryRun === true || !out;
}

function byDirname(argv) {
  return argv.out ? path.dirname(argv.out) : undefined;
}

function byFilename(argv) {
  return argv.out ? path.basename(argv.out) : undefined;
}

// ---
// Runner.
// ---
export async function runCommand({ argv, generate }) {
  const { src: sourceFile } = argv;

  generate({
    sourceFile,
    writeConfig: new WriteConfig({
      dryRun: byIsDryRun(argv),
      directory: byDirname(argv),
      filename: byFilename(argv),
    }),
  }).subscribe({
    complete() {
      log('🎉 All done!');
    },
    error(error) {
      logError('An error occurred: ', error);
      process.exit(1);
    },
  });
}

// ---
// Options.
// ---
export function getDefaultOptions(yargs) {
  return yargs.options({
    dryRun: dryRunOption,
    out: outOption,
    src: srcOption,
  });
}
