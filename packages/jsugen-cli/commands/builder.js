import { log } from '@sthzg/jsugen-core/lib/utils';
import { getDefaultOptions } from '../lib/commons';

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
  return getDefaultOptions(yargs);
}
