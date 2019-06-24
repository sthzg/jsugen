import { fromSourceFile } from '@sthzg/jsugen-core/lib/sources/sourceFile';
import { concatMap, map, reduce, tap } from 'rxjs/operators';
import {
  addMemberDefinitionsForNonEnumArrayIndexes,
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
  enrichWithPathNodeVars,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core';
import { fromJsonSchema } from '@sthzg/jsugen-core/lib/sources/jsonSchema';
import { template as objectPathConstantTemplate } from './objectPathConst.tpl';

export function generate({ sourceFile, writeConfig }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const compileToTemplate = withCompileToTemplate(objectPathConstantTemplate);
  const prependHeaders = withPrependToString(DEFAULT_FILE_DOCSTRING);
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(writeConfig);

  // ---
  // Observable.
  // ---
  return fromSourceFile(sourceFile).pipe(
    concatMap(fromJsonSchema),

    /* Templating */
    map(enrichWithPathNodeVars),
    concatMap(addMemberDefinitionsForNonEnumArrayIndexes),
    map(compileToTemplate),

    /* To String */
    reduce(toTemplateRawStringReducer, EMPTY_STRING),
    map(prependHeaders),
    map(prettify),

    /* Output */
    tap(write),
  );
}
