import { distinct, filter, map, reduce, tap } from 'rxjs/operators';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
  EMPTY_STRING,
} from '@sthzg/jsugen-core/lib/constants';
import {
  enrichWithObjectPathData,
  hasJsonSchemaDefinition,
  fromJsonSchema,
  startsWithPropertiesKeyword,
  toTemplateRawStringReducer,
  withCompileToTemplate,
  withPrependToString,
  withPrettier,
  withWrite,
} from '@sthzg/jsugen-core/lib';
import { byPathInDotNotation } from '@sthzg/jsugen-core/lib/selectors';
import objectPathConstant from './objectPathConst.tpl';

function generateObjectPathsModule({ schema, out }) {
  // ---
  // Configure Transformer Factories.
  // ---
  const compileToTemplate = withCompileToTemplate(objectPathConstant);
  const prependHeaders = withPrependToString(DEFAULT_FILE_DOCSTRING);
  const prettify = withPrettier(DEFAULT_PRETTIER_OPTIONS);
  const write = withWrite(out);

  // ---
  // Observable.
  // ---
  return fromJsonSchema(schema).pipe(
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

export default generateObjectPathsModule;
