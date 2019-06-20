import { map, tap, concatMap } from 'rxjs/operators';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core';
import { fromSourceFile } from '@sthzg/jsugen-core/lib/sources/sourceFile';
import { executeMain } from './internals';

export function generate({ sourceFile, writeConfig }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const prependHeaders = withPrependToString(DEFAULT_FILE_DOCSTRING);
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(writeConfig);

  // ---
  // Observable.
  // ---
  return fromSourceFile(sourceFile).pipe(
    concatMap(executeMain),
    map(prependHeaders),
    map(prettify),

    /* Output */
    tap(write),
  );
}
