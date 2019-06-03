import { concatMap, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_GET_IMPORT,
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
  enrichWithPathNodeTemplateVars,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core';
import { fromJsonSchema } from '@sthzg/jsugen-core/lib/sources/jsonSchema';
import { template as selectorFunctionTemplate } from './selector.tpl';

/**
 * Generates selector functions for all values inside the source documents.
 *
 * Selectors are functions that pick a value from an object in a failsafe way or
 * return `defaultReturn` if the property is not defined on the input object.
 *
 *     function byPersonNthAddressNthStreet(
 *       person,
 *       personIndex = 0,
 *       addressIndex = 0,
 *       defaultReturn,
 *     ) {
 *       return get(person, [personIndex, 'address', addressIndex, 'street']);
 *     }
 */
export function generateSelectorsModule({ schema, out }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const compileToTemplate = withCompileToTemplate(selectorFunctionTemplate);
  const prependHeaders = withPrependToString(
    DEFAULT_FILE_DOCSTRING,
    DEFAULT_GET_IMPORT,
  );
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(out);

  // ---
  // Observable.
  // ---
  return fromJsonSchema(schema).pipe(
    /* Templating */
    concatMap(enrichWithPathNodeTemplateVars),
    map(compileToTemplate),

    /* To String */
    reduce(toTemplateRawStringReducer, EMPTY_STRING),
    map(prependHeaders),
    map(prettify),

    /* Output */
    tap(write),
  );
}
