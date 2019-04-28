import { distinct, filter, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_GET_IMPORT,
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
} from '@sthzg/jsugen-core/lib/constants';
import {
  enrichWithObjectPathData,
  hasJsonSchemaDefinition,
  jsonSchemaObservable,
  startsWithPropertiesKeyword,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core/lib';
import { byPathInDotNotation } from '@sthzg/jsugen-core/lib/selectors';
import selectorFunctionModule from './selector.tpl';

/**
 * Generates selector functions for all values inside the JSON schema.
 *
 * Selectors are functions that pick a value from an object in a failsafe way or return undefined if
 * the property is not defined on the input object, e.g.
 *
 *     function byPersonAddressStreet(person) {
 *       return get(person, 'address.street');
 *     }
 */
function generateSelectorsModule({ schema, out }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const compileToTemplate = withCompileToTemplate(selectorFunctionModule);
  const prependHeaders = withPrependToString(
    DEFAULT_FILE_DOCSTRING,
    DEFAULT_GET_IMPORT,
  );
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(out);

  // ---
  // Observable.
  // ---
  return jsonSchemaObservable(schema).pipe(
    filter(hasJsonSchemaDefinition),
    filter(startsWithPropertiesKeyword),
    map(enrichWithObjectPathData),
    distinct(byPathInDotNotation),
    map(compileToTemplate),
    reduce(toTemplateRawStringReducer, EMPTY_STRING),
    map(prependHeaders),
    map(prettify),
    tap(write),
  );
}

export default generateSelectorsModule;
