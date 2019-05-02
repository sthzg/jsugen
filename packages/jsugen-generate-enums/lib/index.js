import { filter, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
} from '@sthzg/jsugen-core/lib/constants';
import {
  enrichWithEnumValues,
  enrichWithObjectPathData,
  hasJsonSchemaDefinition,
  isEnumType,
  fromJsonSchema,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core/lib';
import buildTemplateVars from './buildTemplateVars';
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
  return fromJsonSchema(schema).pipe(
    /* Filtering */
    filter(hasJsonSchemaDefinition),
    filter(isEnumType),

    /* Enrichment */
    map(enrichWithObjectPathData),
    map(enrichWithEnumValues),

    /* Templating */
    map(buildTemplateVars),
    map(compileToTemplate),

    /* To String */
    reduce(toTemplateRawStringReducer, EMPTY_STRING),
    map(prependHeaders),
    map(prettify),

    /* Output */
    tap(write),
  );
}

export default generateEnumsModule;
