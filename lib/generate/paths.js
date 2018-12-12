const { createWriteStream } = require('fs');
const {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  StdoutWritable,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  PrependToFileTransform,
  PrettierTransform,
} = require('../streams');
const { objectPathConstant } = require('../templates');

module.exports = ({ schema, out }) => {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  jsonSchemaReadable(schema)
    .pipe(new FilterPropertiesTransform())
    .pipe(new BuildObjectPathsTransform())
    .pipe(new CompileToTemplateTransform(objectPathConstant))
    .pipe(new MemorySinkTransform())
    .pipe(new PrependToFileTransform(DEFAULT_FILE_DOCSTRING))
    .pipe(new PrettierTransform(DEFAULT_PRETTIER_OPTIONS))
    .pipe(write);
};
