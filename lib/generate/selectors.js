const {
  buildObjectPathsTransform,
  compileToTemplateTransform,
  stdoutWritable,
  fileWritable,
  filterPropertiesTransform,
  jsonSchemaReadable,
  withPrettierTransform,
  withFileHeadTransform,
} = require('../streams');
const {
  DEFAULT_GET_IMPORT,
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const { MemorySinkTransform } = require('../utils');
const { selectorFunctionModule } = require('../templates');

module.exports = ({ schema, out }) => {
  const write = out ? fileWritable(out) : stdoutWritable;
  const collectDataTransform = new MemorySinkTransform();

  jsonSchemaReadable(schema)
    .pipe(filterPropertiesTransform)
    .pipe(buildObjectPathsTransform)
    .pipe(compileToTemplateTransform(selectorFunctionModule))
    .pipe(collectDataTransform)
    .pipe(withFileHeadTransform(DEFAULT_FILE_DOCSTRING, DEFAULT_GET_IMPORT))
    .pipe(withPrettierTransform(DEFAULT_PRETTIER_OPTIONS))
    .pipe(write);
};
