/* eslint-disable import/no-dynamic-require,global-require */
import { log, logError } from '@sthzg/jsugen-core/lib/utils';
import generateBuilderModule from '@sthzg/jsugen-generate-builder';
import { outOption, schemaOption } from './commonOptions';

// ---
// Handler.
// ---
export function handler(argv) {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generateBuilderModule({ schema, out }).subscribe(
    () => log('🎉 All done!'),
    error => {
      logError('An error occurred: ', error);
      process.exit(1);
    },
  );
}

// ---
// Builder.
// ---
export function builder(yargs) {
  return yargs.options({
    schema: schemaOption,
    out: outOption,
  });
}
