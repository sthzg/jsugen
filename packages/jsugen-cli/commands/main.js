/* eslint-disable global-require,import/no-dynamic-require */
import path from 'path';
import { generate, log, logError } from '@sthzg/jsugen-core';

const CONFIG_FILE_NAME = '.jsugen.config.js';

// ---
// Handler.
// ---
export function handler() {
  const byConfig = () => {
    try {
      return require(path.resolve(process.cwd(), CONFIG_FILE_NAME));
    } catch (error) {
      logError(`${CONFIG_FILE_NAME} not found in working directory`);
      return process.exit(1);
    }
  };

  generate({ config: byConfig() }).subscribe({
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
// Builder.
// ---
export function builder(yargs) {
  return yargs.options({});
}
