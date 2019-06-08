/* eslint-disable global-require,import/no-dynamic-require */
import { log, logError } from '@sthzg/jsugen-core/lib/utils';
import { generate } from '@sthzg/jsugen-generate-lodash-object-paths';
import { outOption, schemaOption } from './commonOptions';

// ---
// Handler.
// ---
export function handler(argv) {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generate({ schema, out }).subscribe(
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
