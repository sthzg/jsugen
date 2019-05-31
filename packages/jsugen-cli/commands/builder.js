/* eslint-disable import/no-dynamic-require,global-require */
import { log } from '@sthzg/jsugen-core/lib/utils';
import { outOption, schemaOption } from './commonOptions';

// ---
// Handler.
// ---
export function handler() {
  log(':`-( The builder module is not implemented yet.');
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
