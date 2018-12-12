const { createWriteStream } = require('fs');
const {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  StdoutWritable,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrettierTransform,
  PrependToFileTransform,
} = require('../streams');
const {
  DEFAULT_GET_IMPORT,
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const { selectorFunctionModule } = require('../templates');

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
module.exports = ({ schema, out }) => {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  jsonSchemaReadable(schema)
    .pipe(new FilterPropertiesTransform())
    .pipe(new BuildObjectPathsTransform())
    .pipe(new CompileToTemplateTransform(selectorFunctionModule))
    .pipe(new MemorySinkTransform())
    .pipe(new PrependToFileTransform(DEFAULT_FILE_DOCSTRING, DEFAULT_GET_IMPORT))
    .pipe(new PrettierTransform(DEFAULT_PRETTIER_OPTIONS))
    .pipe(write);
};
