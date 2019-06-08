import { filter, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
  byMemberDefinitionIsEnum,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
  enrichWithPathNodeVars,
} from '@sthzg/jsugen-core';
import { fromJsonSchema } from '@sthzg/jsugen-core/lib/sources/jsonSchema';
import { buildTemplateVars } from './buildTemplateVars';
import { template as enumModuleTemplate } from './enum.tpl';

export function generate({ schema, out }) {
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
    filter(byMemberDefinitionIsEnum),

    /* Templating */
    map(enrichWithPathNodeVars),
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
