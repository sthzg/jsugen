/* eslint-disable import/no-dynamic-require,global-require */
import generateEnumsModule from '@sthzg/jsugen-generate-enums';
import { outOption, schemaOption } from './commonOptions';

// ---
// Handler.
// ---
export function handler(argv) {
  const { schema: schemaPath, out } = argv;
  const schema = require(schemaPath);
  generateEnumsModule({ schema, out });
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
