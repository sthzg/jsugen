import { createWriteStream } from 'fs';
import { pipeline as pipelineFn } from 'stream';
import { promisify } from 'util';
import {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  FilterSchemaKeywordsTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
  StdoutWritable,
} from '@sthzg/jsugen-core/lib/streams';
import {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_GET_IMPORT,
  DEFAULT_PRETTIER_OPTIONS,
} from '@sthzg/jsugen-core/lib/constants';
import selectorFunctionModule from './selector.tpl';

const pipeline = promisify(pipelineFn);

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
  const write = out ? createWriteStream(out) : new StdoutWritable();

  return pipeline(
    jsonSchemaReadable(schema),
    new FilterSchemaKeywordsTransform(),
    new BuildObjectPathsTransform(),
    new CompileToTemplateTransform(selectorFunctionModule),
    new MemorySinkTransform(),
    new PrependToFileTransform([DEFAULT_FILE_DOCSTRING, DEFAULT_GET_IMPORT]),
    new PrettierTransform(DEFAULT_PRETTIER_OPTIONS),
    write
  );
}

export default generateSelectorsModule;
