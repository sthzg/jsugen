const {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const {
  buildObjectPathsTransform,
  compileToTemplateTransform,
  stdoutWritable,
  fileWritable,
  filterPropertiesTransform,
  jsonSchemaReadable,
  withFileHeadTransform,
  withPrettierTransform,
} = require('../streams');
const { MemorySinkTransform } = require('../utils');
const { objectPathConstant } = require('../templates');

module.exports = ({ schema, out }) => {
  const write = out ? fileWritable(out) : stdoutWritable;
  const collectDataTransform = new MemorySinkTransform();

  jsonSchemaReadable(schema)
    .pipe(filterPropertiesTransform)
    .pipe(buildObjectPathsTransform)
    .pipe(compileToTemplateTransform(objectPathConstant))
    .pipe(collectDataTransform)
    .pipe(withFileHeadTransform(DEFAULT_FILE_DOCSTRING))
    .pipe(withPrettierTransform(DEFAULT_PRETTIER_OPTIONS))
    .pipe(write);
};
