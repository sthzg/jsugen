import { filter, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
} from '@sthzg/jsugen-core/lib/constants';
import {
  enrichWithObjectPathData,
  hasJsonSchemaDefinition,
  isEnumType,
  jsonSchemaObservable,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core/lib';
import enumModuleTemplate from './enum.tpl';

function generateEnumsModule({ schema, out }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const compileToTemplate = withCompileToTemplate(enumModuleTemplate);
  const prependHeaders = withPrependToString(DEFAULT_FILE_DOCSTRING);
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(out);

  // ---
  // Observable.
  // ---
  return jsonSchemaObservable(schema).pipe(
    filter(hasJsonSchemaDefinition),
    filter(isEnumType),
    map(enrichWithObjectPathData),
    map(compileToTemplate),
    reduce(toTemplateRawStringReducer, EMPTY_STRING),
    map(prependHeaders),
    map(prettify),
    tap(write),
  );
}

export default generateEnumsModule;
