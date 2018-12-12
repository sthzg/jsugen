const { createWriteStream } = require('fs');
const {
  DEFAULT_FILE_DOCSTRING,
  DEFAULT_PRETTIER_OPTIONS,
} = require('../constants');
const {
  BuildObjectPathsTransform,
  CompileToTemplateTransform,
  FilterEnumsTransform,
  FilterPropertiesTransform,
  jsonSchemaReadable,
  MemorySinkTransform,
  StdoutWritable,
  PrependToFileTransform,
  PrettierTransform,
} = require('../streams');
const { enumModule } = require('../templates');

module.exports = ({ schema, out }) => {
  const write = out ? createWriteStream(out) : new StdoutWritable();

  jsonSchemaReadable(schema)
    .pipe(new FilterPropertiesTransform())
    .pipe(new FilterEnumsTransform())
    .pipe(new BuildObjectPathsTransform())
    .pipe(new CompileToTemplateTransform(enumModule))
    .pipe(new MemorySinkTransform())
    .pipe(new PrependToFileTransform(DEFAULT_FILE_DOCSTRING))
    .pipe(new PrettierTransform(DEFAULT_PRETTIER_OPTIONS))
    .pipe(write);
};
