/* eslint-disable import/no-dynamic-require,global-require */
import { log, logError } from '@sthzg/jsugen-core/lib/utils';
import generateEnumsModule from '@sthzg/jsugen-generate-enums';
import { outOption, schemaOption } from './commonOptions';

// ---
// Handler.
// ---
export function handler(argv) {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generateEnumsModule({ schema, out }).subscribe(
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
